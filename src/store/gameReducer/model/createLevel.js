import { getResources } from '../../../utils/resources';

const randomFisherYates = (arr) => {
  const result = [...arr];
  const l = result.length - 1;

  for (let i = l; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

export const createLevel = (cardsNum) => {
  const { cardFronts } = getResources();
  const sourceArray = Array.from({ length: +cardsNum }).map((_, index) =>
    Math.floor(index / 2),
  );

  return randomFisherYates(sourceArray).map((cardIndex) => ({
    cardPath: cardFronts[cardIndex],
    cardIndex,
    isError: false,
    isFlipped: false,
    isSolved: false,
  }));
};
