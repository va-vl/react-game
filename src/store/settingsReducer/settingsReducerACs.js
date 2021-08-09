import {
  UPDATE_MUSIC_VOLUME,
  UPDATE_SOUND_VOLUME,
  UPDATE_CARDS_BACK,
  UPDATE_CARDS_AMOUNT,
  UPDATE_APP_THEME,
  UPDATE_LANGUAGE,
} from './settingsReducerActionTypes';

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
