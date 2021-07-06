import { IS_LOADING_GENRES, LOAD_GENRES } from '../constants';

const initialState = {
  isLoaded: false,
  genre: [],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_GENRES:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case LOAD_GENRES:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
