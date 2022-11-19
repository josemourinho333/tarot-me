import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TarotCard from './TarotCard';
import getRandom from '../utils/getRandom';

const CardsReveal = ({ cards }) => {
  const router = useRouter();
  const { pid, target } = router.query;
  const [picked, setPicked] = useState(null);

  useEffect(() => {
    const randomlyPicked = getRandom(target, cards);
    setPicked([...randomlyPicked]);
  }, []);

  const mappedCards = picked?.map((card) => {
    console.log('card position', card.card)
    return (
      <TarotCard
        key={card.card.id}
        id={`${card.card.id}`}
        name={card.card.name}
        family={card.card.family}
        description={card.card.description}
        position={card.position}
        overview={card.card.overview[card.position][0]}
      />
    )
  })

  if (pid === 'One Card Spread') {
    return (
      <div>
        {mappedCards}
      </div>
    )
  }

  return (
    <div>CardsReveal</div>
  )
}

export default CardsReveal;