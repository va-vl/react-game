import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//
import { formatTime } from '../../../utils/format';
//
import './Controls.scss';

const Controls = React.memo(({ gameStarter, moves, timeCount }) => {
  const { t } = useTranslation();

  return (
    <div className="controls">
      <Link to="/">
        <button className="controls__button" type="button">
          {t('Game.Controls.ToMainMenuButton')}
        </button>
      </Link>
      <button className="controls__button" type="button" onClick={gameStarter}>
        {t('Game.Controls.NewGameButton')}
      </button>
      <p className="controls__info">
        {`${t('Game.Controls.GameTime')}: ${formatTime(timeCount)}`}
      </p>
      <p className="controls__info">
        {`${t('Game.Controls.Moves')}: ${moves}`}
      </p>
    </div>
  );
});

Controls.propTypes = {
  gameStarter: PropTypes.func.isRequired,
  moves: PropTypes.number.isRequired,
  timeCount: PropTypes.number.isRequired,
};

export { Controls };
