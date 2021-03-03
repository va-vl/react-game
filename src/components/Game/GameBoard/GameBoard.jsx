import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { gameLevelSelector } from '../../../store/selectors';
import Card from './Card/Card';
import './GameBoard.scss';

const GameBoard = ({ backSrc }) => {
  const level = useSelector(gameLevelSelector);
  const amount = level.length;

  return (
    <ul className={`game-board game-board--${amount}`}>
      {level.map(
        ({ cardPath, cardIndex, isFlipped, isSolved, isError }, index) => {
          const keyProp = `card-${cardIndex}-${index}`;

          return (
            <Card
              key={keyProp}
              levelIndex={index}
              cardIndex={cardIndex}
              frontSrc={cardPath}
              backSrc={backSrc}
              isFlipped={isFlipped}
              isSolved={isSolved}
              isError={isError}
            />
          );
        },
      )}
    </ul>
  );
};

GameBoard.propTypes = {
  backSrc: PropTypes.string.isRequired,
};

export default React.memo(GameBoard);
