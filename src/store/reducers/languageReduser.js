import { LANG } from '../constants';

const initialState = {
  lang: 'ru-RU',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG:
      return {
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
