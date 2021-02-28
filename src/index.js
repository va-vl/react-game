import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import resolveResourcePaths from './utils/resolveResourcePaths';
import './style.scss';

import fakeBackend from './utils/fakeBackend';

fakeBackend();

resolveResourcePaths();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
