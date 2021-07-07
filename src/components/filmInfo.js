// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import noImage from '../images/content/unnamed.jpg';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadGenres } from '../store/actions';
import Preloader from './preloader';

const FilmInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch]);

  const { data, isLoaded } = useSelector((state) => state.gallery);
  const { genre } = useSelector((state) => state.genres);

  let info = data.find((item) => item.id === +id);

  let linkImage = '';
  if (info.poster_path !== null) {
    linkImage = `https://image.tmdb.org/t/p/w500${info.poster_path}`;
  } else {
    linkImage = noImage;
  }
  let arrGenres = [];

  for (let j = 0; j < info.genre_ids.length; j++) {
    const element = info.genre_ids[j];
    genre.find((item) => {
      if (element === item.id) {
        arrGenres.push(item.name);
      }
    });
  }
  const genres = arrGenres.join(', ');

  const element = (
    <div className="info-page">
      <img className="poster" src={linkImage} alt="poster " />
      <div className="info-film">
        <h2>{info.title}</h2>
        <p>{info.overview}</p>
        <span>
          <b>Genres: </b> {genres}
        </span>
        <span>
          <b>Vote average:</b> {info.vote_average}
        </span>
        <span>
          <b>Vote count:</b> {info.vote_count}
        </span>
        <span>
          <b>Popularity,:</b> {info.popularity}
        </span>
        <span>
          <b>Release date:</b> {info.release_date}
        </span>
      </div>
    </div>
  );

  return isLoaded ? <Preloader /> : element;
};

export default FilmInfo;
