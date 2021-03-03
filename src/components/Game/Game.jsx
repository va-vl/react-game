import React, { useState, useEffect } from 'react';
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
  gameMovesSelector,
  userRecordsSelector,
  gameTimeCountSelector,
} from '../../store/selectors';
import IsAuthReady from '../_common/IsAuthReady';
import GameBoard from './GameBoard/GameBoard';
import Controls from './Controls/Controls';
import { getResources } from '../../utils/resources';
import './Game.scss';

const Game = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const gameTimeCount = useSelector(gameTimeCountSelector);
  const isGameOn = useSelector(gameOnSelector);
  const moves = useSelector(gameMovesSelector);
  const matches = useSelector(gameMatchesSelector);
  const cardsAmount = useSelector(cardsAmountSelector);
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const { cardBacks } = getResources();
  const backSrc = cardBacks[cardsBackIndex];
  const records = useSelector(userRecordsSelector);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (matches === cardsAmount / 2) {
      setIsComplete(true);
    }
  }, [matches]);

  useEffect(() => {
    if (isComplete && records) {
      firebase.updateProfile({
        records: [
          ...records,
          {
            humanPlayer: true,
            timestamp: Date.now(),
            cardsAmount,
            gameTimeCount,
            moves,
          },
        ],
      });
    }
  }, [isComplete]);

  useEffect(() => {
    let interval;

    if (!isComplete) {
      interval = setInterval(() => {
        dispatch(gameUpdateTimeAC());
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isComplete]);

  const gameStarter = () => {
    dispatch(gameInitAC(cardsAmount));
    setIsComplete(false);
  };

  if (!isGameOn) {
    gameStarter();
  }

  return (
    <IsAuthReady>
      <div className="game">
        <div className="game__content">
          <Controls gameStarter={gameStarter} />
          <GameBoard backSrc={backSrc} />
        </div>
      </div>
    </IsAuthReady>
  );
};

export default Game;
