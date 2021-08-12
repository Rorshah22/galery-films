const API_KEY = '1b06c9389ebebe29b5b43bc4607a5dec';

const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?language=us-US&api_key=${API_KEY}`;

export const getGallery = (page, sort, lang) =>
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${lang}&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`,
  ).then((res) => res.json());

export const getGenres = () => fetch(GENRES_URL).then((res) => res.json());
