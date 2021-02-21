import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './authReducer/authReducer';

const store = createStore(
  combineReducers({ authReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

setTimeout(() => {
  store.dispatch({
    type: 'SET_USER_NAME',
    payload: '12000',
  });
}, 2000);

export default store;
