import {
  UPDATE_MUSIC_VOLUME,
  UPDATE_SOUND_VOLUME,
  UPDATE_CARDS_AMOUNT,
  UPDATE_CARDS_BACK,
} from './settingsReducerActionTypes';

const initialState = {
  musicVolume: '100',
  soundVolume: '100',
  cardsAmount: '12',
  cardsBack: '01',
};

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MUSIC_VOLUME: {
      return {
        ...state,
        musicVolume: payload,
      };
    }
    case UPDATE_SOUND_VOLUME: {
      return {
        ...state,
        soundVolume: payload,
      };
    }
    case UPDATE_CARDS_AMOUNT: {
      return {
        ...state,
        cardsAmount: payload,
      };
    }
    case UPDATE_CARDS_BACK: {
      return {
        ...state,
        cardsBack: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default settingsReducer;
