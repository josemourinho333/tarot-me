import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CardsContext = createContext();

const Cards = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (cards.length < 1) {
      axios.get('/api/cards')
      .then((res) => {
        setCards([...res.data[0].cards]);
      })
      .catch((err) => console.log('err', err));
    }
  },[]);

  return (
    <CardsContext.Provider value={cards}>
      {children}
    </CardsContext.Provider>
  );
};

export default Cards;

export function useCardsContext() {
  return useContext(CardsContext);
};