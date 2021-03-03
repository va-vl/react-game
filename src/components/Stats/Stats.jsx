import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userRecordsSelector } from '../../store/selectors';
import formatTime from '../../utils/formatTime';
import './Stats.scss';

const Stats = () => {
  const userRecordsSource = useSelector(userRecordsSelector);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (userRecordsSource !== undefined) {
      setArr(userRecordsSource);
    }
  }, [userRecordsSource]);

  return (
    <div className="stats">
      <div className="stats__content">
        <h3 className="stats__heading">Stats</h3>
        <div className="stats__table-wrapper">
          <table className="stats__table">
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
              {[...arr]
                .reverse()
                .map(
                  ({
                    humanPlayer,
                    moves,
                    gameTimeCount,
                    cardsAmount,
                    timestamp,
                  }) => (
                    <tr key={timestamp} className="stats__body-row">
                      <td>{moves}</td>
                      <td>{cardsAmount}</td>
                      <td>{formatTime(gameTimeCount)}</td>
                      <td>
                        {`${new Date(timestamp).toLocaleTimeString(
                          'ru',
                        )} ${new Date(timestamp).toLocaleDateString('ru')}`}
                      </td>
                      <td>{humanPlayer ? 'human' : 'autoplay'}</td>
                    </tr>
                  ),
                )}
            </tbody>
          </table>
        </div>
        <p className="stats__button-wrapper">
          <Link className="stats__button" to="/">
            Menu
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Stats;
