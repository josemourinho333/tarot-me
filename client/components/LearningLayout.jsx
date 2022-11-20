import React, { useState } from 'react';
import Learn from '../pages/learn';
import LearnNavBar from './LearnNavBar';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => axios.get(url)
  .then((res) => res.data[0].cards)
  .catch((err) => console.log('err', err));

const LearningLayout = () => {
  const { data, error } = useSWR('/api/cards', fetcher);
  const [selected, setSelected] = useState(null);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const selectHandler = (id) => {
    setSelected(id);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <LearnNavBar cards={data} selected={selected} selectHandler={selectHandler}/>
      {/* <main className="w-full">
        <Learn selected={selected} cards={data}/>
      </main> */}
    </div>
  )
}

export default LearningLayout;