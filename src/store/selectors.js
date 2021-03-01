const userNameSelector = (state) => state.userReducer.userName;

const musicVolumeSelector = (state) => state.settingsReducer.musicVolume;
const soundVolumeSelector = (state) => state.settingsReducer.soundVolume;
const cardsBackIndexSelector = (state) => state.settingsReducer.cardsBackIndex;
const appThemeSelector = (state) => state.settingsReducer.appTheme;

const cardsAmountSelector = (state) => state.gameReducer.cardsAmount;
const levelSelector = (state) => state.gameReducer.level;
const gameOnSelector = (state) => state.gameReducer.isGameOn;
const gameMovementSelector = (state) => state.gameReducer.isMoving;

export {
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
