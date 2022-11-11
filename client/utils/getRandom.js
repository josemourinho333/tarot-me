//get random card when given target and array of cards
const getRandom = (target, arr) => {
  const newArr = arr.sort(() => {
    return Math.random() - 0.5;
  });

  return newArr[Math.floor(Math.random() * newArr.length)];
};

export default getRandom;