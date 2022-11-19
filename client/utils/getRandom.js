//get random card and their position when given target and array of cards
const getRandom = (target, cards) => {
  // shuffles
  const shuffledCards = [...cards]
  shuffledCards.sort(() => {
    return Math.random() - 0.5;
  });

  const pickedCards = shuffledCards.slice(0, target);

  // loop over picked cards and randomly get their positions (upright or reversed)
  const finalPicked = [];
  pickedCards.forEach((card) => {
    let position;
    const positionIndicator = Math.round(Math.random());
    if (!positionIndicator) {
      position = 'reversed';
    } else {
      position = 'upright';
    };
     
    const buildCard = {
      card,
      position
    };

    finalPicked.push(buildCard);
  });

  return finalPicked;
};

export default getRandom;