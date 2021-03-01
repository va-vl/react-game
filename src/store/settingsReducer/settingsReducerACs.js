// async debounce logic borrowed from here
// https://gist.github.com/krstffr/245fe83885b597aabaf06348220c2fe9

import debounce from 'lodash.debounce';
import { DEBOUNCE_DELAY } from '../../constants/constants';
import {
  UPDATE_MUSIC_VOLUME,
  UPDATE_SOUND_VOLUME,
  UPDATE_CARDS_BACK,
  UPDATE_APP_THEME,
} from './settingsReducerActionTypes';

// Music volume async action
const updateMusicVolumeSyncAC = (payload) => ({
  type: UPDATE_MUSIC_VOLUME,
  payload,
});

const updateMusicVolumeDebouncedAC = debounce((dispatch, ...args) => {
  dispatch(updateMusicVolumeSyncAC(...args));
}, DEBOUNCE_DELAY);

const updateMusicVolumeAC = (...args) => (dispatch) =>
  updateMusicVolumeDebouncedAC(dispatch, ...args);
// End of music volume async action

// Sound volume async action
const updateSoundVolumeSyncAC = (payload) => ({
  type: UPDATE_SOUND_VOLUME,
  payload,
});

const updateSoundVolumeDebouncedAC = debounce((dispatch, ...args) => {
  dispatch(updateSoundVolumeSyncAC(...args));
}, DEBOUNCE_DELAY);

const updateSoundVolumeAC = (...args) => (dispatch) =>
  updateSoundVolumeDebouncedAC(dispatch, ...args);
// End of sound volume async action

const updateCardsBackAC = (payload) => ({
  type: UPDATE_CARDS_BACK,
  payload,
});

const updateAppThemeAC = (payload) => ({
  type: UPDATE_APP_THEME,
  payload,
});

export {
  updateMusicVolumeSyncAC,
  updateMusicVolumeAC,
  updateSoundVolumeSyncAC,
  updateSoundVolumeAC,
  updateCardsBackAC,
  updateAppThemeAC,
};
