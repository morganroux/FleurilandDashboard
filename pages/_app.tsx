import React from 'react';
import App from 'next/app';
import { useDeviceType } from '../helper/useDeviceType';
import { GlobalProvider } from '../context/global/global.provider';

import 'typeface-roboto';

export default function ExtendedApp({
    Component,
    pageProps,
    query,
    userAgent,
  }) {
    const deviceType = useDeviceType(userAgent);
    return (
    <GlobalProvider>
        <Component {...pageProps} deviceType={deviceType} />
    </GlobalProvider>
    );
  }
  
  ExtendedApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    const { req, query } = appContext.ctx;
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { ...appProps, userAgent, query };
  };