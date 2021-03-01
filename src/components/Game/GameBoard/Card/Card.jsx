/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { gameFlipCardAC } from '../../../../store/gameReducer/gameReducerACs';
import { gameMovementSelector } from '../../../../store/selectors';
import './Card.scss';

const createCardClassName = (isFlipped, isSolved, isError) => {
  let result = 'card';

  if (isFlipped) {
    result += ' card--flipped';
  }

  if (isSolved) {
    result += ' card--solved';
  }

  if (isError) {
    result += ' card--error';
  }

  return result;
};

const Card = ({
  frontSrc,
  backSrc,
  isFlipped,
  isSolved,
  isError,
  levelIndex,
  cardIndex,
}) => {
  const dispatch = useDispatch();
  const isMoving = useSelector(gameMovementSelector);

  const handleClick = () => {
    if (!isSolved && !isFlipped && !isMoving) {
      dispatch(gameFlipCardAC({ levelIndex, cardIndex }));
    }
  };

  return (
    <div
      className={createCardClassName(isFlipped, isSolved, isError)}
      onClick={handleClick}
    >
      <img
        className="card__image card__image--back"
        src={backSrc}
        alt="card back"
        draggable="false"
      />
      <img
        className="card__image card__image--front"
        src={frontSrc}
        alt="card front"
        draggable="false"
      />
    </div>
  );
};

Card.propTypes = {
  frontSrc: PropTypes.string.isRequired,
  backSrc: PropTypes.string.isRequired,
  levelIndex: PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isSolved: PropTypes.bool.isRequired,
};

export default React.memo(Card);
