import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import Learn from '../pages/learn';

const LearnNavBar = ({cards, selected, selectHandler}) => {

  const catList = [];
  for (const card of cards) {
    if (!catList.includes(card.family)) {
      catList.push(card.family);
    }
  };

  const items = [];
  for (let i = 0; i < catList.length; i++) {
    items.push(
      <li key={i + 10000}><a href="/" className="font-semibold text-xl pointer-events-none">{catList[i]}</a></li>
    );
    for (let j = 0; j < cards.length; j++) {
      if (catList[i] === cards[j].family) {
        items.push(
          <li
            key={cards[j].id}
            id={cards[j].id}
            className="pl-3"
          >
            <button onClick={() => selectHandler(cards[j].id)} className={`${selected === cards[j].id ? 'bg-primary text-primary-content' : ''}`}>{cards[j].name}</button>
          </li>
        )
      }
    }
  };
  
  return (
    <></>
    // <div className="drawer drawer-mobile max-w-max">
    //   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col items-start justify-center">
    //     <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
    //       <HiMenuAlt1 className="text-neutral-content text-4xl"/>
    //     </label>
    //     <Learn selected={selected} cards={cards} selectHandler={selectHandler}/>
    //   </div> 
    //   <div className="drawer-side">
    //     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 bg-neutral text-neutral-content">
    //       <li><a href="/" className="font-bold normal-case text-3xl">Tarot & I</a></li>
    //       <li><button onClick={() => selectHandler(696969)} className={`${selected === 696969 ? 'bg-primary text-primary-content' : ''}`}>All</button></li>
    //       {items}
    //     </ul>
    //   </div>
    // </div>
  )
};

export default LearnNavBar;