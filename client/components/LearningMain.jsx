import React from 'react';
import LearningDefault from '../components/LearningDefault';
import LearningView from '../components/LearningView';

const LearningMain = ({ selected, cards }) => {

  const selectedCard = cards?.map((card) => {
    if (selected === card.id) {
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
    <div className="p-5 flex flex-wrap justify-center max-h-screen overflow-y-auto">
      {selectedCard}
    </div>
  )
}

export default LearningMain;