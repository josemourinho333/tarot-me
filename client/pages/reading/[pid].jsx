import React from 'react';
import ReadingLayout from '../../components/ReadingLayout';
import { GridLoader } from 'react-spinners';
import CardsReveal from '../../components/CardsReveal';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => axios.get(url)
  .then((res) => res.data)
  .catch((err) => console.log('err', err));

const Reading = () => {
  const { data, error } = useSWR('/api/cards', fetcher);

  return (
    <ReadingLayout>
      {error && <div>Failed to load</div>}
      {!data && <GridLoader color="#ffffff" size={20} margin={40}/>}
      {data && <CardsReveal cards={data[0].cards}/>}
    </ReadingLayout>
  )
}

export default Reading;