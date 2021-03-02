import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  gameInitAC,
  gameUpdateTimeAC,
} from '../../store/gameReducer/gameReducerACs';
import {
  cardsBackIndexSelector,
  gameOnSelector,
  cardsAmountSelector,
} from '../../store/selectors';
import GameBoard from './GameBoard/GameBoard';
import Controls from './Controls/Controls';
import { getResources, getUser } from '../../utils/storage';
import handleUpdate from '../../utils/handleUpdate';
import './Game.scss';

const Game = () => {
  const dispatch = useDispatch();
  const isGameOn = useSelector(gameOnSelector);
  const cardsAmount = useSelector(cardsAmountSelector);
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const { cardBacks } = getResources();
  const backSrc = cardBacks[cardsBackIndex];

  const gameStarter = () => {
    const user = getUser();
    const { gamesStarted } = user;

    handleUpdate({ gamesStarted: gamesStarted + 1 });

    dispatch(gameInitAC(cardsAmount));
  };

  if (!isGameOn) {
    gameStarter();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(gameUpdateTimeAC());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="game">
      <div className="game__content">
        <Controls gameStarter={gameStarter} />
        <GameBoard backSrc={backSrc} />
      </div>
    </div>
  );
};

export default Game;
