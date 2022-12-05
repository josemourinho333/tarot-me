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

function MyApp({ Component, pageProps, cards }) {

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(
      <Component {...pageProps} cards={cards}/>
  )
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const cardsRes = await axios.get('/api/cards');
  const cards = await cardsRes.data[0].cards;
  
  let cardsProps = {};

  if (Component.getInitialProps) {
    cardsProps = await Component.getInitialProps(ctx);
  }
  return { cardsProps, cards}
};

export default MyApp;
