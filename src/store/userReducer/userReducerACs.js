import { USER_SIGN_IN, USER_SIGN_OUT } from './userReducerActionTypes';

const userSignInAC = (userData) => ({
  type: USER_SIGN_IN,
  payload: userData,
});

const userSignOutAC = () => ({ type: USER_SIGN_OUT });

export { userSignInAC, userSignOutAC };
