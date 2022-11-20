import React from 'react';
import LearningLayout from '../components/LearningLayout';
import LearningDefault from '../components/LearningDefault';
import LearningView from '../components/LearningView';

const Learn = ({selected, cards, selectHandler}) => {

  if (!selected) {
    const learningCards = cards?.map((card) => {
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
    })
    return (
      <div className="p-10 flex flex-wrap gap-10 justify-center max-h-screen overflow-y-auto">
        {learningCards}  
      </div>
    )
  };

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
  })

  return (
    <div className="p-10 flex flex-wrap justify-center max-h-screen overflow-y-auto">
      {selectedCard}
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
