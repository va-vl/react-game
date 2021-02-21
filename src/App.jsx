import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Menu from './components/Menu/Menu';
import Settings from './components/Settings/Settings';
import Game from './components/Game/Game';

class App extends Component {
  constructor(props) {
    super(props);

    const { userName } = props;

    this.state = {
      userName,
      previousUserName: userName,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { userName } = props;
    const { previousUserName } = state;

    if (userName !== previousUserName) {
      return {
        userName,
        previousUserName: userName,
      };
    }

    return null;
  }

  render() {
    const { userName } = this.state;
    const { setUserName } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/">
            {userName ? (
              <Menu />
            ) : (
              <Auth defaultName={userName} nameSubmit={setUserName} />
            )}
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/game">
            <Game userName={userName} />
          </Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  userName: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default App;
