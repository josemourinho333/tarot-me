import React, { useState, useEffect } from 'react';
import LearningLayout from '../components/LearningLayout';
import LearningMain from '../components/LearningMain';
import Head from 'next/head';
import Link from 'next/link';
import { useCardsContext } from '../context/Cards';
import axios from 'axios';

const Learn = ({ cards }) => {
  const [selected, setSelected] = useState(0);
  const [catList, setCatList] = useState(null);

  // const cards = useCardsContext();

  useEffect(() => {
    // create array of categories of tarot cards
    const catNames = [];
    for (const card of cards) {
      if (!catNames.includes(card.family)) {
        catNames.push(card.family);
      }
    };
    setCatList([...catNames]);
  }, [cards]);

  // Select drawer item handler
  const selectHandler = (id) => {
    setSelected(id);
  };

  const drawerItems = catList?.map((cat, index) => {
    const output = [];

    if (index === 0) {
      output.push(
        <li key={0} id={0}><button onClick={() => selectHandler(0)} className={`${!selected ? 'bg-primary text-primary-content' : ''}`}>All Cards</button></li>
      );
      output.push(
        <li key={index + 10000}>
          <Link href="/" className="font-semibold text-xl pointer-events-none">
            {cat}
          </Link>
        </li>
      );
    } else {
      output.push(
        <li key={index + 10000}>
          <Link href="/" className="font-semibold text-xl pointer-events-none">
            {cat}
          </Link>
        </li>
      );
    }
    
    cards?.forEach((card) => {
      if (card.family === cat) {
        output.push(
          <li
            key={card.id}
            id={card.id}
            className="pl-3"
          >
            <button onClick={() => selectHandler(card.id)} className={`${selected === card.id ? 'bg-primary text-primary-content' : ''}`}>{card.name}</button>
          </li>
        )
      }
    });

    return output;
  });

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col-reverse">
        
        <LearningMain selected={selected} cards={cards} selectHandler={selectHandler} />
        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-neutral text-neutral-content">
          <li><Link href="/" className="font-bold normal-case text-3xl">Tarot.Me</Link></li>
          {drawerItems}
        </ul>
      </div>
    </div>
  )
};

export async function getStaticProps() {
  const res = await axios.get('/api/cards');
  const cards = await res.data[0].cards;

  return {
    props: {
      cards,
    }
  }
};

export default Learn;

Learn.getLayout = function getLayout(page) {
  return (
    <LearningLayout>
      <Head><title>Tarot.Me - Learn</title></Head>
      {page}
    </LearningLayout>
  )
}
