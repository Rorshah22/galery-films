import { LOAD_GALLERY, LOAD_GENRES } from '../constants'
import { getGallery, getGenres } from '../../services'
import { setIsLoadingGallery, setIsLoadingGenres } from '../actions'

export const loadGallery = (page, sort, lang) => (dispatch) => {
  dispatch(setIsLoadingGallery(true))
  getGallery(page, sort, lang)
    .then((data) => {
      dispatch({ type: LOAD_GALLERY, payload: data.results })
    })
    .then(() => dispatch(setIsLoadingGallery(false)))
}

export const loadGenres = () => (dispatch) => {
  dispatch(setIsLoadingGenres(true))
  getGenres()
    .then((data) => {
      dispatch({ type: LOAD_GENRES, payload: data.genres })
    })
    .then(() => dispatch(setIsLoadingGenres(false)))
}
