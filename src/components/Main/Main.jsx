/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <button type="button">New game</button>
          </li>
          <li>
            <button type="button">Settings</button>
          </li>
          <li>
            <button type="button">Profile</button>
          </li>
        </ul>
        <Link to="/game">Game</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/login">Profile</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loginReducer: user } = state;
  return { user };
}

const connectedMain = connect(mapStateToProps)(Main);

export default connectedMain;
