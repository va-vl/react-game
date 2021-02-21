import { SET_USER_NAME } from './authActionTypes';

const initialState = {
  userName: '',
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_NAME: {
      return {
        ...state,
        userName: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
