import React from 'react';
import ReadingLayout from '../../components/ReadingLayout';
import CardsReveal from '../../components/CardsReveal';
import Head from 'next/head';

const Reading = ({cards}) => {

  return (
    <ReadingLayout>
      <Head><title>Tarot.Me - Reading</title></Head>
      <CardsReveal cards={cards}/>
    </ReadingLayout>
  )
}

export default Reading;