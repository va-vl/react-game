import * as React from 'react';
import { Link } from 'react-router-dom';
//
import { useSelector } from 'react-redux';
import { userRecordsSelector } from '../../store/selectors';
//
import { StatsTable } from './StatsTable';
//
import './Stats.scss';

const Stats = () => {
  const userRecordsSource = useSelector(userRecordsSelector);
  const [arr, setArr] = React.useState([]);

  React.useEffect(() => {
    if (userRecordsSource !== undefined) {
      setArr(userRecordsSource);
    }
  }, [userRecordsSource]);

  return (
    <div className="stats">
      <div className="stats__content">
        <h3 className="stats__heading">Stats</h3>
        <div className="stats__table-wrapper">
          <StatsTable data={arr} />
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

export { Stats };
