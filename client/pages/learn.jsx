import React, { useState, useEffect } from 'react';
import LearningLayout from '../components/LearningLayout';
import LearningMain from '../components/LearningMain';
import axios from 'axios';
import Loading from '../components/Loading';

const Learn = ({ cards }) => {
  const [selected, setSelected] = useState(0);
  const [catList, setCatList] = useState(null);

  useEffect(() => {
    // create array of categories of tarot cards
    const catNames = [];
    for (const card of cards) {
      if (!catNames.includes(card.family)) {
        catNames.push(card.family);
      }
    };
    setCatList([...catNames]);
  }, []);

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
          <a href="/" className="font-semibold text-xl pointer-events-none">
            {cat}
          </a>
        </li>
      );
    } else {
      output.push(
        <li key={index + 10000}>
          <a href="/" className="font-semibold text-xl pointer-events-none">
            {cat}
          </a>
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
          <li><a href="/" className="font-bold normal-case text-3xl">Tarot & I</a></li>
          {drawerItems}
        </ul>
      </div>
    </div>
  )
};

export default Learn;

Learn.getLayout = function getLayout(page) {
  return (
    <LearningLayout>
      {page}
    </LearningLayout>
  )
}
