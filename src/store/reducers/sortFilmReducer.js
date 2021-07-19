import { SORT } from '../constants';

const initialState = {
  sort: 'popularity.desc',
};

const sortFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT:
      return {
        sort: action.payload,
      };
    default:
      return state;
  }
};
export default sortFilmReducer;
