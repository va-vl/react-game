import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/_common/PrivateRoute';
import { appThemeSelector } from './store/selectors';
import FullscreenButton from './components/FullscreenButton/FullscreenButton';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import MusicPlayer from './components/MusicPlayer';
import SoundPlayer from './components/SoundPlayer';
import HotKeysHandler from './components/_common/HotKeysHandler';
import useFullscreenStatus from './hooks/useFullscreenStatus';
import AuthReady from './components/_common/AuthReady/AuthReady';
import './App.scss';

const App = () => {
  const theme = useSelector(appThemeSelector);
  const maximizableElement = useRef(null);
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
