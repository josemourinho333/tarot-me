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

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(
      <Component {...pageProps} />
  )
};

export default MyApp;
