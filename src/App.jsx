import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Menu from './components/Menu/Menu';
import Settings from './components/Settings/Settings';
import Game from './components/Game/Game';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: undefined,
      isAuthenticated: false,
    };

    this.setUserName = this._setUserName.bind(this);
  }

  _setUserName(event) {
    const { value } = event.target;
    this.setState({ userName: value });
  }

  render() {
    const { userName, isAuthenticated } = this.state;

    return (
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/game">Game</Link>
          </li>
        </ul>

        <Switch>
          <Route
            exact
            path="/"
          >
            {
              isAuthenticated
                ? <Menu />
                : <Auth userName={userName} setUserName={this.setUserName} />
            }
          </Route>
          <Route exact path="/menu"><Menu /></Route>
          <Route exact path="/settings"><Settings /></Route>
          <Route exact path="/game"><Game /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
