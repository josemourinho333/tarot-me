import React from 'react';
import Head from 'next/head';
import Astro from '../components/Astro';

const Horoscope = () => {
  return (
    <div>
      <Head><title>Tarot.Me - Daily Horoscope</title></Head>
      <Astro/>
    </div>
  )
}

export default Horoscope;