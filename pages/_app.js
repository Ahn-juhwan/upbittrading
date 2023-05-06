import React, { useState } from 'react';
import '../styles/globals.css';
import ContextUser from '../pageComponents/ContextUser';
import LayoutHome from '../pageComponents/layout/LayoutHome';
import LayoutLogin from '../pageComponents/layout/LayoutLogin';

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

  return (
    <ContextUser.Provider value={[user, setUser]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextUser.Provider>
  );
};

export default MyApp;
