import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from './loginActionTypes';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: payload,
      };
    case USER_LOGIN_FAILURE:
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
