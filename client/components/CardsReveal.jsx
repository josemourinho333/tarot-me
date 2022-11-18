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
    return (
      <TarotCard
        key={card.id}
        name={card.name}
        family={card.family}
        description={card.description}
      />
    )
  })

  if (pid === 'One Card Spread') {
    return (
      <TarotCard />
    )
  }

  return (
    <div>CardsReveal</div>
  )
}

export default CardsReveal;