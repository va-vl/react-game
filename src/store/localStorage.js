// source https://stackoverflow.com/a/61943772

const saveState = (reducerName) => (state) => {
  try {
    const serializedState = JSON.stringify(state[reducerName]);
    localStorage.setItem(`vaz-${reducerName}`, serializedState);
  } catch (err) {
    console.log(err);
  }
};

const saveSettingsState = (state) => {
  saveState('settingsReducer')(state);
};

const saveGameState = (state) => {
  saveState('gameReducer')(state);
};

const fixGameReload = (state) => {
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

const loadSettingsState = () => {
  try {
    const serializedSettings = localStorage.getItem('vaz-settingsReducer');
    const serializedGame = localStorage.getItem('vaz-gameReducer');
    const result = {};

    if (serializedSettings !== null) {
      result.settingsReducer = JSON.parse(serializedSettings);
    }

    if (serializedGame !== null) {
      result.gameReducer = fixGameReload(JSON.parse(serializedGame));
    }

    if (serializedSettings || serializedGame) {
      return result;
    }

    return undefined;
  } catch (err) {
    return err && undefined;
  }
};

export { saveSettingsState, saveGameState, loadSettingsState };
