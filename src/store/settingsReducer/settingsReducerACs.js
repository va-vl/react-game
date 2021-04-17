// leaving this for future reference
// async debounce logic borrowed from here
// https://gist.github.com/krstffr/245fe83885b597aabaf06348220c2fe9

// import debounce from 'lodash.debounce';
// import { DEBOUNCE_DELAY } from '../../constants/constants';
import {
  UPDATE_MUSIC_VOLUME,
  UPDATE_SOUND_VOLUME,
  UPDATE_CARDS_BACK,
  UPDATE_CARDS_AMOUNT,
  UPDATE_APP_THEME,
  UPDATE_LANGUAGE,
} from './settingsReducerActionTypes';

// Music volume async action
// Sound can be done the same way
// const updateMusicVolumeSyncAC = (payload) => ({
//   type: UPDATE_MUSIC_VOLUME,
//   payload,
// });

// const updateMusicVolumeDebouncedAC = debounce((dispatch, ...args) => {
//   dispatch(updateMusicVolumeSyncAC(...args));
// }, DEBOUNCE_DELAY);

// const updateMusicVolumeAC = (...args) => (dispatch) =>
//   updateMusicVolumeDebouncedAC(dispatch, ...args);
// End of music volume async action

export const updateMusicVolumeAC = (payload) => ({
  type: UPDATE_MUSIC_VOLUME,
  payload,
});

export const updateSoundVolumeAC = (payload) => ({
  type: UPDATE_SOUND_VOLUME,
  payload,
});

export const updateCardsAmountAC = (payload) => ({
  type: UPDATE_CARDS_AMOUNT,
  payload,
});

export const updateCardsBackAC = (payload) => ({
  type: UPDATE_CARDS_BACK,
  payload,
});

export const updateAppThemeAC = (payload) => ({
  type: UPDATE_APP_THEME,
  payload,
});

export const updateLanguageAC = (payload) => ({
  type: UPDATE_LANGUAGE,
  payload,
});
