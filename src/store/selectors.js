const userNameSelector = (state) => state.userReducer.userName;
const musicVolumeSelector = (state) => state.settingsReducer.musicVolume;
const soundVolumeSelector = (state) => state.settingsReducer.soundVolume;
const cardsAmountSelector = (state) => state.settingsReducer.cardsAmount;
const cardsBackIndexSelector = (state) => state.settingsReducer.cardsBackIndex;
const appThemeSelector = (state) => state.settingsReducer.appTheme;

export {
  userNameSelector,
  musicVolumeSelector,
  soundVolumeSelector,
  cardsAmountSelector,
  cardsBackIndexSelector,
  appThemeSelector,
};
