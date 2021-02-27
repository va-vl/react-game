import { USER_SIGN_IN, USER_SIGN_OUT } from './userReducerActionTypes';

const userSignInAC = (userName) => ({
  type: USER_SIGN_IN,
  payload: userName,
});

const userSignOutAC = () => ({ type: USER_SIGN_OUT });

export { userSignInAC, userSignOutAC };
