import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { userNameSelector, gameOnSelector } from '../../store/selectors';
import './Main.scss';

const Main = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const userName = useSelector(userNameSelector);
  const isGameOn = useSelector(gameOnSelector);

  const handleSignOut = () => {
    firebase.logout().then(() => {
      history.push('/signin');
    });
  };

  return (
    <main className="main">
      <div className="main__content">
        <h3 className="main__heading">{`Hello, ${userName}!`}</h3>
        <ul className="main__list">
          <li className="main__link">
            <Link className="main__button" to="/game">
              {isGameOn ? 'Continue' : 'New game'}
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
            <Link className="main__button" to="/info">
              Info
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
