import { USER_SIGN_IN, USER_SIGN_OUT } from './userReducerActionTypes';

const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case USER_SIGN_IN:
      return {
        ...state,
        userName: payload,
      };
    case USER_SIGN_OUT: {
      return {
        ...state,
        userData: undefined,
      };
    }
  }
};

export default userReducer;
