import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import LearningLayout from '../components/LearningLayout';
import LearningMain from '../components/LearningMain';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => axios.get(url)
  .then((res) => res.data[0].cards)
  .catch((err) => console.log('err', err));

const Learn = () => {
  const { data, error } = useSWR('/api/cards', fetcher);
  const [selected, setSelected] = useState(696969);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  // Select drawer item handler
  const selectHandler = (id) => {
    setSelected(id);
  };

  // create array of categories of tarot cards
  const catList = [];
  for (const card of data) {
    if (!catList.includes(card.family)) {
      catList.push(card.family);
    }
  };

  // loop over array of categoires and loop over each cards within to create grouped jsx elements
  const items = [];
  for (let i = 0; i < catList.length; i++) {
    items.push(
      <li key={i + 10000}><a href="/" className="font-semibold text-xl pointer-events-none">{catList[i]}</a></li>
    );
    for (let j = 0; j < data.length; j++) {
      if (catList[i] === data[j].family) {
        items.push(
          <li
            key={data[j].id}
            id={data[j].id}
            className="pl-3"
          >
            <button onClick={() => selectHandler(data[j].id)} className={`${selected === data[j].id ? 'bg-primary text-primary-content' : ''}`}>{data[j].name}</button>
          </li>
        )
      }
    }
  };

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <LearningMain selected={selected} cards={data} selectHandler={selectHandler} />
        {/* <Learn selected={selected} cards={data} selectHandler={selectHandler}/> */}
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-neutral text-neutral-content">
          <li><a href="/" className="font-bold normal-case text-3xl">Tarot & I</a></li>
          <li><button onClick={() => selectHandler(696969)} className={`${selected === 696969 ? 'bg-primary text-primary-content' : ''}`}>All</button></li>
          {items}
        </ul>
      </div>
    </div>
  )
}

export default Learn;

Learn.getLayout = function getLayout(page) {
  return (
    <LearningLayout>
      {page}
    </LearningLayout>
  )
}
