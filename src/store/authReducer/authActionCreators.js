/* eslint-disable import/prefer-default-export */
import { SET_USER_NAME } from './authActionTypes';

const setUserNameAC = (data) => ({
  type: SET_USER_NAME,
  payload: data,
});

export { setUserNameAC };
