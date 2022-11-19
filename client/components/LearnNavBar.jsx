import React from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => axios.get(url)
  .then((res) => res.data[0].cards)
  .catch((err) => console.log('err', err));

const LearnNavBar = () => {
  const { data, error } = useSWR('/api/cards', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  // console.log('cards', data);

  const cardsDrawerItem = data?.map((card) => {
    console.log('cards', card);

    return (
      <li
        key={card.id}
        id={card.id}
      >
        <a href={`/learn/${card.name.split(' ').join('').toLowerCase()}`}>{card.name}</a>
      </li>
    )
  })
  
  return (
    <div className="drawer drawer-mobile max-w-max">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div> 
      <div className="drawer-side bg-blue-500">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-neutral text-neutral-content">
          <li><a href="/" className="font-bold normal-case text-3xl">Tarot & I</a></li>
          {cardsDrawerItem}
        </ul>
      </div>
    </div>
  )
};

export default LearnNavBar;