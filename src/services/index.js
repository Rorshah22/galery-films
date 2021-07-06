const API_KEY = '1b06c9389ebebe29b5b43bc4607a5dec';

// const SORT = {
//   popularityDesc: 'popularity.desc',
//   voteAverageDesc: 'vote_average.desc',
//   voteAverageAsc: 'vote_average.asc',
//   releaseDateDesc: 'release_date.desc',
//   releaseDateAsc: 'release_date.asc',
// };

// const PAGE = 1;

const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`;

// const GALLERY_URL = ;

export const getGallery = (page) =>
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  ).then((res) => res.json());

export const getGenres = () => fetch(GENRES_URL).then((res) => res.json());
