import { LOGIN, IS_AUTHENTICATION, IS_ADMIN } from '../constants';

const initialState = {
  login: '',
  isAdmin: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };

    case IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };
    case IS_AUTHENTICATION:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
