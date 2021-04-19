import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import { Card } from './Card';
//
import './GameBoard.scss';

const GameBoard = React.memo(({ backSrc, cardsAmount, level, autoPlay }) => (
  <ul className={clsx('game-board', `game-board--${cardsAmount}`)}>
    {level.map(
      ({ cardPath, cardIndex, isFlipped, isSolved, isError }, index) => {
        const keyProp = `${cardPath}-${index}`;

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
            autoPlay={autoPlay}
          />
        );
      },
    )}
  </ul>
));

GameBoard.propTypes = {
  backSrc: PropTypes.string.isRequired,
  cardsAmount: PropTypes.number.isRequired,
  level: PropTypes.instanceOf(Array).isRequired,
  autoPlay: PropTypes.bool.isRequired,
};

export { GameBoard };
