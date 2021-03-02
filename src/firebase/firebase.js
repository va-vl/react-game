import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createFirestoreInstance } from 'redux-firestore';
import firebaseConfig from './firebaseConfig';
import store from '../store/store';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  profileFactory: (_, profileData) => {
    // how profiles are stored in database
    const { userName } = profileData;
    return {
      userName,
    };
  },
  createFirestoreInstance,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const app = firebase.initializeApp(firebaseConfig);

firebase.firestore();

export { app, rrfProps, rrfConfig };
