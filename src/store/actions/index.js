import {
  IS_LOADING_GALLERY,
  LOAD_GALLERY,
  IS_LOADING_GENRES,
  LOAD_GENRES,
  PAGE,
} from '../constants';
import { getGallery, getGenres } from '../../services';

export const setPage = (page) => ({
  type: PAGE,
  payload: page,
});

export const setIsLoadingGallery = (value) => ({
  type: IS_LOADING_GALLERY,
  payload: value,
});

export const setIsLoadingGenres = (value) => ({
  type: IS_LOADING_GENRES,
  payload: value,
});

export const loadGallery = (page) => (dispatch) => {
  dispatch(setIsLoadingGallery(true));
  getGallery(page)
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
