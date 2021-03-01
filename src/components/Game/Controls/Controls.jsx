import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { gameInitAC } from '../../../store/gameReducer/gameReducerACs';
import formatTime from '../../../utils/formatTime';
import './Controls.scss';

const Controls = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const moves = useSelector((state) => state.gameReducer.moves);
  const timeCount = useSelector((state) => state.gameReducer.timeCount);

  const handleBackClick = () => {
    history.push('/');
  };

  const handleNewGameClick = () => {
    dispatch(gameInitAC());
  };

  return (
    <div className="controls">
      <button
        className="controls__button"
        type="button"
        onClick={handleBackClick}
      >
        To main menu
      </button>
      <button
        className="controls__button"
        type="button"
        onClick={handleNewGameClick}
      >
        Start new game
      </button>
      <p className="controls__info">{`Game time: ${formatTime(timeCount)}`}</p>
      <p className="controls__info">{`Moves made: ${moves}`}</p>
    </div>
  );
};

export default React.memo(Controls);
