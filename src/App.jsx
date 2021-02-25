import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/_common/PrivateRoute';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => (
  <main className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute exact path="/">
          <Main />
        </PrivateRoute>
        <PrivateRoute exact path="/game">
          <Game />
        </PrivateRoute>
        <PrivateRoute exact path="/settings">
          <Settings />
        </PrivateRoute>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
    <Footer />
  </main>
);

export default App;
