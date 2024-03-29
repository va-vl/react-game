import {
  GAME_INIT,
  GAME_UPDATE_TIME,
  GAME_RESET,
  GAME_TOGGLE_AUTOPLAY,
  GAME_CLEAR_SOUND,
  GAME_CARD_FLIP_START,
  GAME_CARD_FLIP_END,
  GAME_CARD_MATCH_START,
  GAME_CARD_MATCH_END,
} from './gameReducerActionTypes';
//
import { createLevel } from './model';

const initialState = {
  isGameOn: false,
  isAutoplayOn: false,
  isGameComplete: false,
  isMoving: false,
  isMatching: false,
  timeCount: 0,
  moves: 0,
  matches: 0,
  sound: '',
  level: [],
  currentlyFlipped: [],
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }

    case GAME_INIT: {
      const { isAutoplayOn } = state;

      return {
        ...initialState,
        isGameOn: true,
        isAutoplayOn,
        level: createLevel(payload),
      };
    }

    case GAME_UPDATE_TIME: {
      const { timeCount } = state;
      return {
        ...state,
        timeCount: timeCount + 1000,
      };
    }

    case GAME_RESET: {
      return {
        ...initialState,
      };
    }

    case GAME_TOGGLE_AUTOPLAY: {
      const { isAutoplayOn } = state;

      return {
        ...initialState,
        isAutoplayOn: !isAutoplayOn,
      };
    }

    case GAME_CLEAR_SOUND: {
      return {
        ...state,
        sound: '',
      };
    }

    case GAME_CARD_FLIP_START: {
      const { level, moves, currentlyFlipped } = state;
      const { levelIndex } = payload;

      return {
        ...state,
        isMoving: true,
        moves: moves + 1,
        sound: 'move',
        currentlyFlipped: [...currentlyFlipped, payload],
        level: level.map((card, ind) => {
          if (levelIndex === ind) {
            return {
              ...card,
              isFlipped: true,
            };
          }
          return card;
        }),
      };
    }

    case GAME_CARD_FLIP_END: {
      return {
        ...state,
        isMoving: false,
      };
    }

    case GAME_CARD_MATCH_START: {
      const {
        currentlyFlipped: [
          { cardIndex: cardIndex1, levelIndex: levelIndex1 },
          { cardIndex: cardIndex2, levelIndex: levelIndex2 },
        ],
        matches,
        level,
      } = state;

      const isGameComplete = matches + 1 === level.length / 2;

      if (cardIndex1 === cardIndex2) {
        return {
          ...state,
          isMatching: true,
          isGameComplete,
          isGameOn: !isGameComplete,
          sound: isGameComplete ? 'win' : 'match',
          matches: matches + 1,
          level: level.map((obj, index) => {
            if (index === levelIndex1 || index === levelIndex2) {
              return {
                ...obj,
                isFlipped: true,
                isSolved: true,
              };
            }

            return obj;
          }),
        };
      }

      return {
        ...state,
        isMatching: true,
        sound: 'error',
        level: level.map((obj, index) => {
          if (index === levelIndex1 || index === levelIndex2) {
            return {
              ...obj,
              isFlipped: true,
              isSolved: false,
              isError: true,
            };
          }

          return obj;
        }),
      };
    }

    case GAME_CARD_MATCH_END: {
      const {
        level,
        currentlyFlipped: [
          { levelIndex: levelIndex1 },
          { levelIndex: levelIndex2 },
        ],
      } = state;

      return {
        ...state,
        isMatching: false,
        isMoving: false,
        currentlyFlipped: [],
        level: level.map((obj, index) => {
          if (index === levelIndex1 || index === levelIndex2) {
            const { isSolved } = obj;

            return {
              ...obj,
              isFlipped: isSolved,
              isError: false,
            };
          }

          return obj;
        }),
      };
    }
  }
};

export default gameReducer;
