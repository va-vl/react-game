export const fixGameOnReload = (state) => {
  const { currentlyFlipped, level, matches } = state;

  if (currentlyFlipped.length === 1) {
    return {
      ...state,
      isMoving: false,
      isMatching: false,
    };
  }

  if (currentlyFlipped.length === 2) {
    const [
      { cardIndex: cardIndex1, levelIndex: levelIndex1 },
      { cardIndex: cardIndex2, levelIndex: levelIndex2 },
    ] = currentlyFlipped;

    const isSolved = cardIndex1 === cardIndex2;

    return {
      ...state,
      isMoving: false,
      isMatching: false,
      matches: matches + +isSolved,
      currentlyFlipped: [],
      level: level.map((obj, index) => {
        if (index === levelIndex1 || index === levelIndex2) {
          return {
            ...obj,
            isSolved,
            isFlipped: isSolved,
            isError: false,
          };
        }

        return obj;
      }),
    };
  }

  return state;
};
