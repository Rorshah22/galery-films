import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import genresReducer from './reducers/genresReducer';
import galleryReducer from './reducers/galleryReducer';
import pageReducer from './reducers/pageReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  genres: genresReducer,
  gallery: galleryReducer,
  page: pageReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
