import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import genresReducer from './reducers/genresReducer';
import galleryReducer from './reducers/galleryReducer';
import pageReducer from './reducers/pageReducer';
import sortFilmReducer from './reducers/sortFilmReducer';
import authReducer from './reducers/authReducer';
import languageReducer from "./reducers/languageReduser";

const rootReducer = combineReducers({
  genres: genresReducer,
  gallery: galleryReducer,
  page: pageReducer,
  sort: sortFilmReducer,
  auth: authReducer,
  lang: languageReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
