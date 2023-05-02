import React, { useState } from 'react';
import '../styles/globals.css';
import ContextUser from '../pageComponents/ContextUser';
import header from '../pageComponents/header';

const getLayout = (asPath) => {
  return header;
};

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const [user, setUser] = useState({});

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
