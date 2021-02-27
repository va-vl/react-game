import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer/userReducer';

const store = createStore(
  combineReducers({ userReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
