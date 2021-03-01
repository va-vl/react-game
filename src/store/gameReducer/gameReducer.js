import {
  GAME_INIT,
  GAME_SET_CARDS_AMOUNT,
  GAME_CARD_FLIP_START,
  GAME_CARD_FLIP_END,
  GAME_CARD_PROCESS,
  GAME_UPDATE_TIME,
} from './gameReducerActionTypes';
import createLevel from './createLevel';

const initialState = {
  timeCount: 0,
  isGameOn: false,
  isMoving: false,
  moves: 0,
  matches: 0,
  currentlyFlipped: null,
  cardsAmount: '12',
  level: [],
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case GAME_SET_CARDS_AMOUNT: {
      return {
        ...initialState,
        cardsAmount: payload,
      };
    }
    case GAME_INIT: {
      const { cardsAmount } = state;

      return {
        ...initialState,
        isGameOn: true,
        cardsAmount,
        level: createLevel(cardsAmount),
      };
    }
    case GAME_CARD_FLIP_START: {
      const { level } = state;
      const { levelIndex } = payload;

      return {
        ...state,
        isMoving: true,
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
      const { level } = state;
      return {
        ...state,
        isMoving: false,
        level: level.map((obj) => ({ ...obj, isError: false })),
      };
    }
    case GAME_CARD_PROCESS: {
      const { currentlyFlipped, matches, moves, level } = state;
      const { levelIndex, cardIndex } = payload;

      if (currentlyFlipped === null) {
        return {
          ...state,
          moves: moves + 1,
          currentlyFlipped: { levelIndex, cardIndex },
        };
      }

      const {
        levelIndex: currentLevelIndex,
        cardIndex: currentCardIndex,
      } = currentlyFlipped;

      if (cardIndex === currentCardIndex) {
        return {
          ...state,
          currentlyFlipped: null,
          moves: moves + 1,
          matches: matches + 1,
          level: level.map((obj, index) => {
            if (index === levelIndex || index === currentLevelIndex) {
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
        currentlyFlipped: null,
        moves: moves + 1,
        level: level.map((obj, index) => {
          if (index === levelIndex || index === currentLevelIndex) {
            return {
              ...obj,
              isFlipped: false,
              isSolved: false,
              isError: true,
            };
          }

          return obj;
        }),
      };
    }
    case GAME_UPDATE_TIME: {
      const { timeCount } = state;
      return {
        ...state,
        timeCount: timeCount + 1000,
      };
    }
  }
};

export default gameReducer;
