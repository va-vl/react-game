import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from './loginActionTypes';
import * as userService from '../../services/userService';

const userLoginAC = (username, password) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: username });

  userService.login(username, password).then(
    (res) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res });
    },
    (err) => {
      dispatch({ type: USER_LOGIN_FAILURE, payload: `${err}` });
    },
  );
};

const userLogoutAC = () => {
  userService.logout();
  return { type: USER_LOGOUT };
};

export { userLoginAC, userLogoutAC };
