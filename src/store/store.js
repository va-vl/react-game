import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import settingsReducer from './settingsReducer/settingsReducer';
import gameReducer from './gameReducer/gameReducer';

const store = createStore(
  combineReducers({ settingsReducer, gameReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
