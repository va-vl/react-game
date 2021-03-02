// source https://stackoverflow.com/a/61943772

const saveSettingsState = (state) => {
  try {
    const serializedState = JSON.stringify(state.settingsReducer);
    localStorage.setItem('settingsReducer', serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadSettingsState = () => {
  try {
    const serializedState = localStorage.getItem('settingsReducer');

    if (serializedState === null) {
      return undefined;
    }

    return { settingsReducer: JSON.parse(serializedState) };
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export { saveSettingsState, loadSettingsState };
