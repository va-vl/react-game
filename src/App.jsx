import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/_common/PrivateRoute';
import { appThemeSelector } from './store/selectors';
import FullscreenButton from './components/FullscreenButton/FullscreenButton';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import useFullscreenStatus from './hooks/useFullscreenStatus';
import './App.scss';

const App = () => {
  const theme = useSelector(appThemeSelector);
  const maximizableElement = useRef(null);
  const [fullscreenStatus, setFullscreenStatus] = useFullscreenStatus(
    maximizableElement,
  );

  return (
    <main ref={maximizableElement} className={`app app--${theme}`}>
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
      <FullscreenButton
        status={fullscreenStatus}
        handleFullscreenOn={setFullscreenStatus}
      />
      <Footer />
      <MusicPlayer />
    </main>
  );
};

export default App;
