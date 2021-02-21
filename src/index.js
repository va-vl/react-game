import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import store from './store/store';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
