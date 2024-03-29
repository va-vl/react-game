import { fixGameOnReload } from './gameReducer/model';

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

const loadSettingsState = () => {
  try {
    const serializedSettings = localStorage.getItem('vaz-settingsReducer');
    const serializedGame = localStorage.getItem('vaz-gameReducer');
    const result = {};

    if (serializedSettings !== null) {
      result.settingsReducer = JSON.parse(serializedSettings);
    }

    if (serializedGame !== null) {
      result.gameReducer = fixGameOnReload(JSON.parse(serializedGame));
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
