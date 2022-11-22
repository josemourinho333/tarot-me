import React from 'react';
import LearningDefault from '../components/LearningDefault';
import LearningView from '../components/LearningView';

const LearningMain = ({ selected, cards, selectHandler }) => {

  const selectedCard = cards?.map((card) => {
    if (!selected) {
      return (
        <LearningDefault
          key={card.id}
          id={card.id}
          name={card.name}
          desc={card.description}
          family={card.family}
          selectHandler={selectHandler}
          image={card.image}
        />
      )
    }
    if (!selected || selected === card.id) {
      return (
        <LearningView 
          key={card.id}
          name={card.name}
          desc={card.description}
          family={card.family}
          overview={card.overview}
          image={card.image}
        />
      )
    }
  });

  return (
    <div className="p-5 flex flex-wrap justify-center max-h-screen overflow-y-auto gap-5">
      {selectedCard}
    </div>
  )
}

export default LearningMain;