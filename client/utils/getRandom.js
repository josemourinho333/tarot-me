//get random card when given target and array of cards
const getRandom = (target, cards) => {
  // shuffles
  const shuffledCards = [...cards]
  shuffledCards.sort(() => {
    return Math.random() - 0.5;
  });
  
  return shuffledCards.slice(0, target);
};

export default getRandom;