import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleSignOut } from '../../utils/handleAuth';
import { userNameSelector } from '../../store/selectors';
import './Main.scss';

const Main = () => {
  const userName = useSelector(userNameSelector);

  return (
    <main className="main">
      <div className="main__content">
        <h3 className="main__heading">{`Hello, ${userName}!`}</h3>
        <ul className="main__list">
          <li className="main__link">
            <Link className="main__button" to="/game">
              Game
            </Link>
          </li>
          <li className="main__link">
            <Link className="main__button" to="/settings">
              Settings
            </Link>
          </li>
          <li className="main__link">
            <Link className="main__button" to="/stats">
              Stats
            </Link>
          </li>
          <li className="main__link">
            <button
              className="main__button"
              type="button"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
