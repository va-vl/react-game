import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//
import './VictoryModal.scss';

const VictoryModal = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="victory-modal">
      <div className="victory-modal__content">
        <h2 className="victory-modal__heading">
          {t('Game.VictoryModal.Heading')}
        </h2>
        <p className="victory-modal__text">{t('Game.VictoryModal.Text')}</p>
        <div className="victory-modal__buttons">
          <button
            type="button"
            onClick={onClick}
            className="victory-modal__button"
          >
            {t('Game.VictoryModal.NewGameButton')}
          </button>
          <Link className="victory-modal__button" to="/stats" onClick={onClick}>
            {t('Game.VictoryModal.StatsButton')}
          </Link>
          <Link className="victory-modal__button" to="/" onClick={onClick}>
            {t('Game.VictoryModal.MenuButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};

VictoryModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { VictoryModal };
