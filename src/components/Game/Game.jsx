import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  gameInitAC,
  gameUpdateTimeAC,
} from '../../store/gameReducer/gameReducerACs';
import { cardsBackIndexSelector, gameOnSelector } from '../../store/selectors';
import GameBoard from './GameBoard/GameBoard';
import Controls from './Controls/Controls';
import { getResources } from '../../utils/resources';
import './Game.scss';

const Game = () => {
  const dispatch = useDispatch();
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const isGameOn = useSelector(gameOnSelector);
  const { cardBacks } = getResources();
  const backSrc = cardBacks[cardsBackIndex];

  if (!isGameOn) {
    dispatch(gameInitAC());
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
        <Controls />
        <GameBoard backSrc={backSrc} />
      </div>
    </div>
  );
};

export default Game;
