import * as React from 'react';
import { useSelector } from 'react-redux';
//
import { Redirect, Route, Switch } from 'react-router-dom';
import { appThemeSelector } from './store/selectors';
//
import {
  About,
  Footer,
  Game,
  Main,
  Settings,
  SignIn,
  SignUp,
  Stats,
  FullscreenButton,
  MusicPlayer,
  SoundPlayer,
} from './components';
//
import { HotKeysHandler, AuthReady, PrivateRoute } from './components/_common';
//
import useFullscreenStatus from './hooks/useFullscreenStatus';
//
import './App.scss';

const App = () => {
  const theme = useSelector(appThemeSelector);
  const maximizableElement = React.useRef(null);

  const [fullscreenStatus, setFullscreenStatus] = useFullscreenStatus(
    maximizableElement,
  );

  return (
    <main ref={maximizableElement} className={`app app--${theme}`}>
      <AuthReady>
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/">
            <Main />
            <HotKeysHandler />
          </PrivateRoute>
          <PrivateRoute exact path="/game">
            <Game />
            <HotKeysHandler />
          </PrivateRoute>
          <PrivateRoute exact path="/settings">
            <Settings />
            <HotKeysHandler />
          </PrivateRoute>
          <PrivateRoute exact path="/stats">
            <Stats />
            <HotKeysHandler />
          </PrivateRoute>
          <PrivateRoute exact path="/info">
            <About />
            <HotKeysHandler />
          </PrivateRoute>
          <Redirect from="*" to="/" />
        </Switch>
        <FullscreenButton
          status={fullscreenStatus}
          handleFullscreenOn={setFullscreenStatus}
        />
        <Footer />
        <SoundPlayer />
        <MusicPlayer />
      </AuthReady>
    </main>
  );
};

export default App;
