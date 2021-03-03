import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import settingsReducer from './settingsReducer/settingsReducer';
import gameReducer from './gameReducer/gameReducer';
import {
  saveSettingsState,
  saveGameState,
  loadSettingsState,
} from './localStorage';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: { firebaseReducer, firestoreReducer, gameReducer, settingsReducer },
  middleware: customizedMiddleware,
  preloadedState: loadSettingsState(),
});

store.subscribe(() => {
  saveGameState(store.getState());
  saveSettingsState(store.getState());
});

export default store;
