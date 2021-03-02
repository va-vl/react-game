import {
  GAME_INIT,
  GAME_CARD_FLIP_START,
  GAME_CARD_FLIP_END,
  GAME_CARD_PROCESS,
  GAME_UPDATE_TIME,
} from './gameReducerActionTypes';
import {
  FLIP_ANIMATION_DELAY,
  CLEANUP_ANIMATION_DELAY,
} from '../../constants/constants';

const gameInitAC = (payload) => ({
  type: GAME_INIT,
  payload,
});

const gameCardFlipStartAC = ({ levelIndex, cardIndex }) => ({
  type: GAME_CARD_FLIP_START,
  payload: { levelIndex, cardIndex },
});

const gameCardFlipEndAC = () => ({
  type: GAME_CARD_FLIP_END,
});

const gameCardProcessAC = ({ levelIndex, cardIndex }) => ({
  type: GAME_CARD_PROCESS,
  payload: { levelIndex, cardIndex },
});

const gameFlipCardAC = ({ levelIndex, cardIndex }) => (dispatch) => {
  dispatch(gameCardFlipStartAC({ levelIndex, cardIndex }));

  setTimeout(() => {
    dispatch(gameCardProcessAC({ levelIndex, cardIndex }));

    setTimeout(() => {
      dispatch(gameCardFlipEndAC());
    }, CLEANUP_ANIMATION_DELAY);
  }, FLIP_ANIMATION_DELAY);
};

const gameUpdateTimeAC = () => ({ type: GAME_UPDATE_TIME });

export { gameInitAC, gameFlipCardAC, gameUpdateTimeAC };
