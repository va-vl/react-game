import {
  GAME_INIT,
  GAME_UPDATE_TIME,
  GAME_RESET,
  GAME_TOGGLE_AUTOPLAY,
  GAME_CARD_FLIP_START,
  GAME_CARD_FLIP_END,
  GAME_CARD_MATCH_START,
  GAME_CARD_MATCH_END,
  GAME_CLEAR_SOUND,
} from './gameReducerActionTypes';
//
import {
  SOUND_DELAY,
  FLIP_ANIMATION_DELAY,
  MATCH_ANIMATION_DELAY,
  AUTOPLAY_DELAY,
} from '../../constants/constants';
//
import { getRandomCard } from './model';

const gameCardFlipStartAC = (obj) => ({
  type: GAME_CARD_FLIP_START,
  payload: obj,
});
const gameCardFlipEndAC = () => ({ type: GAME_CARD_FLIP_END });
const gameCardMatchStartAC = () => ({ type: GAME_CARD_MATCH_START });
const gameCardMatchEndAC = () => ({ type: GAME_CARD_MATCH_END });
const gameClearSoundAC = () => ({ type: GAME_CLEAR_SOUND });

export const gameInitAC = (payload) => ({
  type: GAME_INIT,
  payload,
});
export const gameUpdateTimeAC = () => ({ type: GAME_UPDATE_TIME });
export const gameResetAC = () => ({ type: GAME_RESET });
export const gameToggleAutoplayAC = () => ({ type: GAME_TOGGLE_AUTOPLAY });

export const gameMakeMoveAC = ({ levelIndex, cardIndex }) => (
  dispatch,
  getState,
) =>
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

export const gameAutoPlayAC = () => (dispatch, getState) => {
  const {
    gameReducer: { level },
  } = getState();

  const randomCard = getRandomCard(level);

  return new Promise((resolve) => {
    dispatch(gameCardFlipStartAC(randomCard));

    setTimeout(() => {
      dispatch(gameClearSoundAC());
    }, SOUND_DELAY);

    setTimeout(() => {
      dispatch(gameCardFlipEndAC());

      resolve();
    }, AUTOPLAY_DELAY);
  }).then(() => {
    const {
      gameReducer: { currentlyFlipped },
    } = getState();

    if (currentlyFlipped.length === 2) {
      dispatch(gameCardMatchStartAC());

      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch(gameClearSoundAC());
          resolve();
        }, SOUND_DELAY);
      }).then(() => {
        setTimeout(() => {
          dispatch(gameCardMatchEndAC());
        }, AUTOPLAY_DELAY);
      });
    }

    return null;
  });
};
