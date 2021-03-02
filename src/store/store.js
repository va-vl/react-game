import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import settingsReducer from './settingsReducer/settingsReducer';
import gameReducer from './gameReducer/gameReducer';
import { saveSettingsState, loadSettingsState } from './localStorage';

const store = configureStore({
  reducer: { gameReducer, settingsReducer },
  preloadedState: loadSettingsState(),
});

store.subscribe(throttle(() => saveSettingsState(store.getState()), 1000));

export default store;
