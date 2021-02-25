/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/_common/PrivateRoute';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';
import './App.scss';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/" component={Main} />
        <PrivateRoute exact path="/game" component={Game} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
