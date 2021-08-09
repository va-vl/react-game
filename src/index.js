import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './firebase/firebase';
//
import App from './App';
//
import store from './store/store';
import { MusicProvider } from './contexts/MusicContext';
//
import { resolveResources } from './utils/resources';
import './i18n';
//
import './style.scss';

resolveResources();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <MusicProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </MusicProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
