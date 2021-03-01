import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { gameInitAC } from '../../store/gameReducer/gameReducerACs';
import { cardsBackIndexSelector, gameOnSelector } from '../../store/selectors';
import GameBoard from './GameBoard/GameBoard';
import { getResources } from '../../utils/resources';
import './Game.scss';

const Game = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const isGameOn = useSelector(gameOnSelector);
  const { cardBacks } = getResources();
  const backSrc = cardBacks[cardsBackIndex];

  if (!isGameOn) {
    dispatch(gameInitAC());
  }

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <div className="game">
      <div className="game__content">
        <GameBoard backSrc={backSrc} />
      </div>
      <div className="game__button-wrapper">
        <button
          className="game__button"
          type="button"
          onClick={handleBackClick}
        >
          To main menu
        </button>
        <button className="game__button" type="button">
          Start new game
        </button>
      </div>
    </div>
  );
};

export default Game;
