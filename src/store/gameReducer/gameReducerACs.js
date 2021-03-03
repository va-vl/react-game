import {
  GAME_INIT,
  GAME_UPDATE_TIME,
  GAME_RESET,
  GAME_TOGGLE_AUTOPLAY,
  GAME_CARD_FLIP_START,
  GAME_CARD_MATCH_START,
  GAME_CARD_MATCH_END,
  GAME_CLEAR_SOUND,
} from './gameReducerActionTypes';
import {
  SOUND_DELAY,
  FLIP_ANIMATION_DELAY,
  MATCH_ANIMATION_DELAY,
} from '../../constants/constants';

const gameInitAC = (payload) => ({
  type: GAME_INIT,
  payload,
});

const gameUpdateTimeAC = () => ({ type: GAME_UPDATE_TIME });

const gameResetAC = () => ({ type: GAME_RESET });

const gameClearSoundAC = () => ({ type: GAME_CLEAR_SOUND });

const gameToggleAutoplayAC = () => ({ type: GAME_TOGGLE_AUTOPLAY });

const gameCardFlipStartAC = (obj) => ({
  type: GAME_CARD_FLIP_START,
  payload: obj,
});

const gameCardMatchStartAC = () => ({
  type: GAME_CARD_MATCH_START,
});

const gameCardMatchEndAC = () => ({
  type: GAME_CARD_MATCH_END,
});

const gameMakeMoveAC = ({ levelIndex, cardIndex }) => (dispatch, getState) => {
  new Promise((resolve) => {
    dispatch(gameCardFlipStartAC({ levelIndex, cardIndex }));

    setTimeout(() => {
      dispatch(gameClearSoundAC());
    }, SOUND_DELAY);

    resolve();
  }).then(() => {
    const {
      gameReducer: { currentlyFlipped },
    } = getState();

    if (currentlyFlipped.length === 2) {
      dispatch(gameCardMatchStartAC());

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, FLIP_ANIMATION_DELAY);
      }).then(() => {
        setTimeout(() => {
          dispatch(gameClearSoundAC());
        }, SOUND_DELAY);

        setTimeout(() => {
          dispatch(gameCardMatchEndAC());
        }, MATCH_ANIMATION_DELAY);
      });
    }

    return null;
  });
};
export {
  gameInitAC,
  gameUpdateTimeAC,
  gameResetAC,
  gameToggleAutoplayAC,
  gameMakeMoveAC,
};
