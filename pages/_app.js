import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import ContextUser from '../pageComponents/ContextUser';
import LayoutHome from '../pageComponents/layout/LayoutHome';
import LayoutLogin from '../pageComponents/layout/LayoutLogin';
import { useRouter } from 'next/router';
import axios from 'axios';

const getLayout = (asPath) => {
  if (asPath === '/login') {
    return LayoutLogin;
  }
  return LayoutHome;
};

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const [user, setUser] = useState(null);

  const Layout = getLayout(props.router.asPath);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async (url) => {
      const response = await axios.get('/api/auth');

      const newUser = response?.data?.user;
      setUser(newUser);

      const [pathname, search] = url?.split('?') || [];
      const needToNotLogin = ['/join', '/login', '/resetPassword'].some((v) =>
        pathname.startsWith(v)
      );
      if (needToNotLogin && newUser) {
        return router.replace('/');
      }

      const needToLogin = ['/myPage', '/requestService'].some((v) =>
        pathname.startsWith(v)
      );
      if (needToLogin && !newUser) {
        return router.replace('/login');
      }

      const needAdmin = ['/admin'].some((v) => pathname.startsWith(v));
      if (needAdmin && newUser?.role !== 'Admin') {
        return router.replace('/');
      }
    };
    checkSession(router.pathname);

    router.events.on('routeChangeStart', checkSession);
    return () => {
      router.events.off('routeChangeStart', checkSession);
    };
  }, []);

  return (
    <ContextUser.Provider value={[user, setUser]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextUser.Provider>
  );
};

export default MyApp;
