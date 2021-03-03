import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import {
  gameInitAC,
  gameUpdateTimeAC,
} from '../../store/gameReducer/gameReducerACs';
import {
  gameOnSelector,
  gameMovesSelector,
  gameTimeCountSelector,
  gameCompleteSelector,
  gameLevelSelector,
  userRecordsSelector,
  cardsBackIndexSelector,
  cardsAmountSelector,
} from '../../store/selectors';
import IsAuthReady from '../_common/AuthReady/AuthReady';
import GameBoard from './GameBoard/GameBoard';
import Controls from './Controls/Controls';
import VictoryModal from './VictoryModal/VictoryModal';
import { getResources } from '../../utils/resources';
import './Game.scss';

const Game = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const isGameOn = useSelector(gameOnSelector);
  const isGameComplete = useSelector(gameCompleteSelector);
  const gameTimeCount = useSelector(gameTimeCountSelector);
  const level = useSelector(gameLevelSelector);
  const moves = useSelector(gameMovesSelector);
  const cardsAmount = useSelector(cardsAmountSelector);
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const records = useSelector(userRecordsSelector);
  const { cardBacks } = getResources();
  const backSrc = cardBacks[cardsBackIndex];
  const [modal, setModal] = useState(null);

  const gameStarter = () => {
    dispatch(gameInitAC(cardsAmount));
  };

  useEffect(() => {
    if (!isGameOn && !isGameComplete) {
      gameStarter();
    }
  }, [isGameOn, isGameComplete]);

  useEffect(() => {
    let interval;

    if (isGameOn && !isGameComplete) {
      interval = setInterval(() => {
        dispatch(gameUpdateTimeAC());
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isGameComplete, isGameOn]);

  useEffect(() => {
    if (isGameComplete && !isGameOn && records) {
      setModal(<VictoryModal onClick={gameStarter} />);

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

    if (!isGameComplete && isGameOn) {
      setModal(null);
    }
  }, [isGameComplete, isGameOn]);

  return (
    <IsAuthReady>
      <div className="game">
        {modal}
        <div className="game__content">
          <Controls
            gameStarter={gameStarter}
            moves={moves}
            timeCount={gameTimeCount}
          />
          <GameBoard
            backSrc={backSrc}
            cardsAmount={cardsAmount}
            level={level}
          />
        </div>
      </div>
      {}
    </IsAuthReady>
  );
};

export default Game;
