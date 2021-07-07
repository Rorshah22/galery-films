import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import genresReducer from './reducers/genresReducer';
import galleryReducer from './reducers/galleryReducer';
import pageReducer from './reducers/pageReducer';
import sortFilmReducer from './reducers/sortFilmReducer';
import authReducer from './reducers/authReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  genres: genresReducer,
  gallery: galleryReducer,
  page: pageReducer,
  sort: sortFilmReducer,
  auth: authReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
