import { IS_LOADING_GALLERY, LOAD_GALLERY } from '../constants';

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
    default:
      return state;
  }
};

export default galleryReducer;
