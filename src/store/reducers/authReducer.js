import { LOGIN, PASSWORD, IS_AUTHENTICATION, IS_ADMIN } from '../constants';

const initialState = {
  login: '',
  password: '',
  isAdmin: false,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
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

export default authReduser;
