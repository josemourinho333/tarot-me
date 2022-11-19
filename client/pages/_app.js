import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import axios from 'axios';
import React from 'react';

if (process.env.baseURL) {
  axios.defaults.baseURL = process.env.baseURL;
} else {
  axios.defaults.baseURL = process.env.REACT_APP_LOCAL_URL;
}

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>Tarot Card</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
