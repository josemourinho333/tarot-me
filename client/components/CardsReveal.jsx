import React from 'react';
import TarotCard from './TarotCard';

const CardsReveal = ({cards}) => {

  const mappedCards = cards?.map((card) => {
    return (
      <TarotCard
        key={card.card.id}
        id={`${card.card.id}`}
        name={card.card.name}
        family={card.card.family}
        description={card.card.description}
        position={card.position}
        overview={card.card.overview[card.position][0]}
        image={card.card.image}
      />
    )
  });

  if (mappedCards?.length === 1) {
    return (
    <div className="w-full carousel carousel-center max-w-5xl my-5 space-x-4 bg-neutral rounded-box justify-center">
      {mappedCards}
    </div>
  );
  }

  return (
    <div className="w-full carousel carousel-center max-w-5xl my-5 space-x-4 bg-neutral rounded-box">
      {mappedCards}
    </div>
  );
};

export default CardsReveal;