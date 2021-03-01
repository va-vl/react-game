import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer/userReducer';
import settingsReducer from './settingsReducer/settingsReducer';
import gameReducer from './gameReducer/gameReducer';

const store = createStore(
  combineReducers({ userReducer, settingsReducer, gameReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
