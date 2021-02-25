import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './loginReducer/loginReducer';

const store = createStore(
  combineReducers({ loginReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
