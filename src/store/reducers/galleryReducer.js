import {
  IS_LOADING_GALLERY,
  LOAD_GALLERY,
  ADD_FILM,
  DELETE_FILM,
} from '../constants';

const initialState = {
  isLoaded: false,
  data: [],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_GALLERY:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case LOAD_GALLERY:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_FILM:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case DELETE_FILM:
      return {
        ...state,
        data: state.data.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};

export default galleryReducer;
