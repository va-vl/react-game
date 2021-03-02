// source https://stackoverflow.com/a/61943772

const saveState = (reducerName) => (state) => {
  try {
    const serializedState = JSON.stringify(state[reducerName]);
    localStorage.setItem(reducerName, serializedState);
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

const loadSettingsState = () => {
  try {
    const serializedSettings = localStorage.getItem('settingsReducer');
    const serializedGame = localStorage.getItem('gameReducer');
    const result = {};

    if (serializedSettings !== null) {
      result.settingsReducer = JSON.parse(serializedSettings);
    }

    if (serializedGame !== null) {
      result.gameReducer = JSON.parse(serializedGame);
    }

    if (serializedSettings || serializedGame) {
      return result;
    }

    return undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export { saveSettingsState, saveGameState, loadSettingsState };
