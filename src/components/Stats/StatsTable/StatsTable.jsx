import * as React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
//
import formatTime from '../../../utils/formatTime';
import formatDateTime from '../../../utils/formatDateTime';
//
import './StatsTable.scss';

const StatsTable = ({ data }) => {
  const { t } = useTranslation();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>{t('Stats.StatsTable.Headings.Moves')}</th>
          <th>{t('Stats.StatsTable.Headings.BoardSize')}</th>
          <th>{t('Stats.StatsTable.Headings.Time')}</th>
          <th>{t('Stats.StatsTable.Headings.Date')}</th>
          <th>{t('Stats.StatsTable.Headings.Player')}</th>
        </tr>
      </thead>
      <tbody>
        {[...data]
          .reverse()
          .map(
            ({ humanPlayer, moves, gameTimeCount, cardsAmount, timestamp }) => (
              <tr key={timestamp} className="table__row">
                <td>{moves}</td>
                <td>{cardsAmount}</td>
                <td>{formatTime(gameTimeCount)}</td>
                <td>{formatDateTime(timestamp)}</td>
                <td>
                  {t(`Stats.StatsTable.Player.${humanPlayer ? 'Human' : 'AI'}`)}
                </td>
              </tr>
            ),
          )}
      </tbody>
    </table>
  );
};

StatsTable.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export { StatsTable };
