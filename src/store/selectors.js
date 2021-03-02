const musicVolumeSelector = (state) => state.settingsReducer.musicVolume;
const soundVolumeSelector = (state) => state.settingsReducer.soundVolume;
const cardsBackIndexSelector = (state) => state.settingsReducer.cardsBackIndex;
const cardsAmountSelector = (state) => state.settingsReducer.cardsAmount;
const appThemeSelector = (state) => state.settingsReducer.appTheme;

const levelSelector = (state) => state.gameReducer.level;
const gameOnSelector = (state) => state.gameReducer.isGameOn;
const gameMovementSelector = (state) => state.gameReducer.isMoving;

const authSelector = (state) => state.firebaseReducer.auth;
const fireStoreLevelSelector = (state) => state.firestoreReducer.level;
const userNameSelector = (state) => state.firebaseReducer.profile.userName;

export {
  authSelector,
  fireStoreLevelSelector,
  userNameSelector,
  musicVolumeSelector,
  soundVolumeSelector,
  cardsAmountSelector,
  cardsBackIndexSelector,
  appThemeSelector,
  levelSelector,
  gameOnSelector,
  gameMovementSelector,
};
