import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './VictoryModal.scss';

const VictoryModal = ({ onClick }) => (
  <div className="victory-modal">
    <div className="victory-modal__content">
      <h2 className="victory-modal__heading">Congratulations!</h2>
      <p className="victory-modal__text">Check stats to see your results</p>
      <div className="victory-modal__buttons">
        <button
          className="victory-modal__button"
          type="button"
          onClick={onClick}
        >
          Start new game
        </button>
        <Link className="victory-modal__button" to="/stats" onClick={onClick}>
          To stats
        </Link>
        <Link className="victory-modal__button" to="/" onClick={onClick}>
          To menu
        </Link>
      </div>
    </div>
  </div>
);

VictoryModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default VictoryModal;
