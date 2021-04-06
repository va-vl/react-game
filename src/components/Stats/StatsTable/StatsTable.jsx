import * as React from 'react';
import PropTypes from 'prop-types';
//
import formatTime from '../../../utils/formatTime';
//
import './StatsTable.scss';

const StatsTable = ({ data }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Moves used</th>
        <th>Board size</th>
        <th>Time spent</th>
        <th>Level completed</th>
        <th>Completed by</th>
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
              <td>
                {`${new Date(timestamp).toLocaleTimeString('ru')} ${new Date(
                  timestamp,
                ).toLocaleDateString('ru')}`}
              </td>
              <td>{humanPlayer ? 'human' : 'autoplay'}</td>
            </tr>
          ),
        )}
    </tbody>
  </table>
);

StatsTable.propTypes = {
  data: PropTypes.istanceOf(Array).isRequired,
};

export { StatsTable };
