import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import formatTime from '../../../utils/formatTime';

import './Controls.scss';

const Controls = ({ gameStarter }) => {
  const history = useHistory();
  const moves = useSelector((state) => state.gameReducer.moves);
  const timeCount = useSelector((state) => state.gameReducer.timeCount);

  const handleBackClick = () => {
    history.push('/');
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
      <button className="controls__button" type="button" onClick={gameStarter}>
        Start new game
      </button>
      <p className="controls__info">{`Game time: ${formatTime(timeCount)}`}</p>
      <p className="controls__info">{`Moves made: ${moves}`}</p>
    </div>
  );
};

Controls.propTypes = {
  gameStarter: PropTypes.func.isRequired,
};

export default React.memo(Controls);
