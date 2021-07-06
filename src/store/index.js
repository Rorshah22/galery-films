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

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
const store = createStore(rootReducer, enhancer);

export default store;
