export const musicVolumeSelector = (state) => state.settingsReducer.musicVolume;
export const soundVolumeSelector = (state) => state.settingsReducer.soundVolume;
export const cardsBackIndexSelector = (state) =>
  state.settingsReducer.cardsBackIndex;
export const cardsAmountSelector = (state) => state.settingsReducer.cardsAmount;
export const appThemeSelector = (state) => state.settingsReducer.appTheme;

export const gameLevelSelector = (state) => state.gameReducer.level;
export const gameOnSelector = (state) => state.gameReducer.isGameOn;
export const gameSoundSelector = (state) => state.gameReducer.sound;
export const gameMatchingSelector = (state) => state.gameReducer.isMatching;
export const gameMatchesSelector = (state) => state.gameReducer.matches;

export const authSelector = (state) => state.firebaseReducer.auth;
export const userNameSelector = (state) =>
  state.firebaseReducer.profile.displayName;
export const userRecordsSelector = (state) =>
  state.firebaseReducer.profile.records;
