import React from 'react';
import { Link } from 'react-router-dom';
import { handleSignOut } from '../../utils/handleAuth';
import './Main.scss';

const Main = (props) => {
  console.log(props);

  return (
    <main className="main">
      <ul>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <button type="button" onClick={handleSignOut}>
            Logout
          </button>
        </li>
      </ul>
    </main>
  );
};

export default Main;
