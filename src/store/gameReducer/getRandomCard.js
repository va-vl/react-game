const getRandomCard = (arr) => {
  const availableCards = arr
    .map((obj, levelIndex) => ({
      ...obj,
      levelIndex,
    }))
    .filter(({ isFlipped, isSolved }) => !isFlipped && !isSolved);

  const ind = Math.floor(Math.random() * availableCards.length);

  return availableCards[ind];
};

export default getRandomCard;
