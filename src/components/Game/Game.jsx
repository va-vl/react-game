import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import {
  gameInitAC,
  gameUpdateTimeAC,
} from '../../store/gameReducer/gameReducerACs';
import {
  cardsBackIndexSelector,
  cardsAmountSelector,
  gameOnSelector,
  gameMatchesSelector,
} from '../../store/selectors';
import GameBoard from './GameBoard/GameBoard';
import Controls from './Controls/Controls';
import { getResources } from '../../utils/resources';
import './Game.scss';

const Game = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const isGameOn = useSelector(gameOnSelector);
  const matches = useSelector(gameMatchesSelector);
  const cardsAmount = useSelector(cardsAmountSelector);
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const { cardBacks } = getResources();
  const backSrc = cardBacks[cardsBackIndex];

  const gameStarter = () => {
    dispatch(gameInitAC(cardsAmount));
  };

  if (!isGameOn) {
    gameStarter();
  }

  useEffect(() => {
    if (matches === cardsAmount / 2) {
      firebase.updateProfile({});
    }
  });

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
