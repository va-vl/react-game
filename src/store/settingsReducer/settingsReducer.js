import {
  UPDATE_MUSIC_VOLUME,
  UPDATE_SOUND_VOLUME,
  UPDATE_CARDS_BACK,
  UPDATE_APP_THEME,
} from './settingsReducerActionTypes';

const initialState = {
  musicVolume: '100',
  soundVolume: '100',
  cardsBackIndex: 0,
  appTheme: 'green',
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
    case UPDATE_CARDS_BACK: {
      return {
        ...state,
        cardsBackIndex: +payload,
      };
    }
    case UPDATE_APP_THEME: {
      return {
        ...state,
        appTheme: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default settingsReducer;
