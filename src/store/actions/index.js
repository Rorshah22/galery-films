import {
  IS_LOADING_GALLERY,
  LOAD_GALLERY,
  IS_LOADING_GENRES,
  LOAD_GENRES,
  PAGE,
  SORT,
  LOGIN,
  PASSWORD,
  IS_AUTHENTICATION,
  IS_ADMIN,
} from '../constants';

import { getGallery, getGenres } from '../../services';

export const setAuth = (value) => ({
  type: IS_AUTHENTICATION,
  payload: value,
});

export const setAdmin = (value) => ({
  type: IS_ADMIN,
  payload: value,
});

export const setLogin = (value) => ({
  type: LOGIN,
  payload: value,
});

export const setPassword = (value) => ({
  type: PASSWORD,
  payload: value,
});

export const setPage = (page) => ({
  type: PAGE,
  payload: page,
});

export const setSort = (value) => ({
  type: SORT,
  payload: value,
});

export const setIsLoadingGallery = (value) => ({
  type: IS_LOADING_GALLERY,
  payload: value,
});

export const setIsLoadingGenres = (value) => ({
  type: IS_LOADING_GENRES,
  payload: value,
});

export const loadGallery = (page, sort) => (dispatch) => {
  dispatch(setIsLoadingGallery(true));
  getGallery(page, sort)
    .then((data) => {
      dispatch({ type: LOAD_GALLERY, payload: data.results });
    })
    .then(() => dispatch(setIsLoadingGallery(false)));
};

export const loadGenres = () => (dispatch) => {
  dispatch(setIsLoadingGenres(true));
  getGenres()
    .then((data) => {
      dispatch({ type: LOAD_GENRES, payload: data.genres });
    })
    .then(() => dispatch(setIsLoadingGenres(false)));
};
