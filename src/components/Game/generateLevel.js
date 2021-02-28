/**
 * @param {Array} arr
 */
const randomFisherYates = (arr) => {
  const result = [...arr];
  const l = result.length - 1;

  for (let i = l; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

/**
 * @param {Array} sourceArr
 * @param {Number} cardsNum
 */
const generateLevel = (sourceArr, cardsNum) => {
  const sourcePairs = randomFisherYates(sourceArr)
    .slice(0, cardsNum / 2)
    .flatMap((item) => [
      {
        cardIndex: item,
        isFlipped: false,
        isSolved: false,
      },
      {
        cardIndex: item,
        isFlipped: false,
        isSolved: false,
      },
    ]);

  return randomFisherYates(sourcePairs);
};

export default generateLevel;
