/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import { useDispatch, useSelector } from 'react-redux';
import { gameMatchingSelector } from '../../../../store/selectors';
import { gameMakeMoveAC } from '../../../../store/gameReducer/gameReducerACs';
//
import './Card.scss';

const Card = React.memo(
  ({
    frontSrc,
    backSrc,
    isFlipped,
    isSolved,
    isError,
    levelIndex,
    cardIndex,
    autoPlay,
  }) => {
    const dispatch = useDispatch();
    const isMatching = useSelector(gameMatchingSelector);

    const handleClick = () => {
      if (!isSolved && !isFlipped && !isMatching && !autoPlay) {
        dispatch(gameMakeMoveAC({ levelIndex, cardIndex }));
      }
    };

    return (
      <div
        className={clsx('card', {
          'card--flipped': isFlipped,
          'card--solved': isSolved,
          'card--error': isError,
        })}
        onClick={handleClick}
      >
        <img
          className={clsx('card__image', 'card__image--back')}
          src={backSrc}
          alt="card back"
          draggable="false"
        />
        <img
          className={clsx('card__image', 'card__image--front')}
          src={frontSrc}
          alt="card front"
          draggable="false"
        />
      </div>
    );
  },
);

Card.propTypes = {
  frontSrc: PropTypes.string.isRequired,
  backSrc: PropTypes.string.isRequired,
  levelIndex: PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isSolved: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired,
};

export { Card };
