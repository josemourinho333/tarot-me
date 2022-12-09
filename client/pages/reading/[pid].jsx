import React, { useEffect, useState } from 'react';
import ReadingLayout from '../../components/ReadingLayout';
import CardsReveal from '../../components/CardsReveal';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import getRandom from '../../utils/getRandom';

const Reading = ({cards}) => {
  const router = useRouter();
  const { pid } = router.query;
  const [picked, setPicked] = useState(null);

  useEffect(() => {
    const randomlyPicked = getRandom(pid, cards);
    setPicked([...randomlyPicked]);
  }, [cards]);

  return (
    <ReadingLayout>
      <Head><title>Tarot.Me - Reading</title></Head>
      <CardsReveal cards={picked}/>
    </ReadingLayout>

  )
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: '1' } }, 
      { params: { pid: '3' } },
      { params: { pid: '5' } },
      { params: { pid: '10' } },
    ],
    fallback: false,
  }
};

export async function getStaticProps({params}) {
  const id = params.pid;
  try {
    const response = await axios.get(`/api/cards`);

    const cards = await response.data;

    return {
      props: {
        cards: cards[0].cards
      }
    }

  } catch (error) {
    console.log('error', error);
  }
};

export default Reading;