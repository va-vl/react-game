import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './firebase/firebase';

import App from './App';
import store from './store/store';
import { resolveResources } from './utils/resources';
import './style.scss';

resolveResources();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
