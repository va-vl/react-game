import {
  UPDATE_MUSIC_VOLUME,
  UPDATE_SOUND_VOLUME,
  UPDATE_CARDS_AMOUNT,
  UPDATE_CARDS_BACK,
} from './settingsReducerActionTypes';

const updateMusicVolumeAC = (payload) => ({
  type: UPDATE_MUSIC_VOLUME,
  payload,
});

const updateSoundVolumeAC = (payload) => ({
  type: UPDATE_SOUND_VOLUME,
  payload,
});

const updateCardsAmountAC = (payload) => ({
  type: UPDATE_CARDS_AMOUNT,
  payload,
});

const updateCardsBackAC = (payload) => ({
  type: UPDATE_CARDS_BACK,
  payload,
});

export {
  updateMusicVolumeAC,
  updateSoundVolumeAC,
  updateCardsAmountAC,
  updateCardsBackAC,
};
