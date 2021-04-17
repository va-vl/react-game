import {
  UPDATE_MUSIC_VOLUME,
  UPDATE_SOUND_VOLUME,
  UPDATE_CARDS_AMOUNT,
  UPDATE_CARDS_BACK,
  UPDATE_APP_THEME,
  UPDATE_LANGUAGE,
} from './settingsReducerActionTypes';

const initialState = {
  musicVolume: 50,
  soundVolume: 50,
  cardsBackIndex: 0,
  cardsAmount: 12,
  appTheme: 'green',
  language: 'en',
};

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MUSIC_VOLUME: {
      return {
        ...state,
        musicVolume: +payload,
      };
    }
    case UPDATE_SOUND_VOLUME: {
      return {
        ...state,
        soundVolume: +payload,
      };
    }
    case UPDATE_CARDS_BACK: {
      return {
        ...state,
        cardsBackIndex: +payload,
      };
    }
    case UPDATE_CARDS_AMOUNT: {
      return {
        ...state,
        cardsAmount: +payload,
      };
    }
    case UPDATE_APP_THEME: {
      return {
        ...state,
        appTheme: payload,
      };
    }
    case UPDATE_LANGUAGE: {
      return {
        ...state,
        language: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default settingsReducer;
