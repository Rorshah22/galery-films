import { useEffect } from 'react';
// import noImage from '../images/content/unnamed.jpg';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadGenres } from '../store/middleware';
import { setDeleteFilm } from '../store/actions';
import Preloader from './preloader';

import noImage from '../images/content/unnamed.jpg';

const FilmInfo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
      dispatch(loadGenres());
    }, [dispatch]);

    const { data, isLoaded } = useSelector((state) => state.gallery);
    const { genre } = useSelector((state) => state.genres);
    const { isAdmin } = useSelector((state) => state.auth);
    const { lang } = useSelector((state) => state.lang);

    let info = data.find((item) => item.id === +id);

    const infoFilm = () => {
      const changeLangInfo = {
        ru: {
          genres: 'Жанры',
          voteAverage: 'Среднее количество голосов',
          voteCount: 'Общее количество голосов',
          popularity: 'Популярность',
          releaseDate: 'Дата выхода',
        },
        us: {
          genres: 'Genres',
          voteAverage: 'Vote average',
          voteCount: 'Vote count',
          popularity: 'Popularity',
          releaseDate: 'Release date',
        },
      };
      return lang === 'ru-RU' ? changeLangInfo.ru : changeLangInfo.us;
    };


    document.title = info.title;

    const getPosterFilm = () => {
      let linkImage;
      if (info.poster_path !== null) {
        linkImage = `https://image.tmdb.org/t/p/w500${info.poster_path}`;
      } else {
        linkImage = noImage;
      }
      return linkImage;
    };

    const getGenres = () => {
      let arrGenres = [];

      for (let j = 0; j < info.genre_ids.length; j++) {
        const element = info.genre_ids[j];
        genre.find((item) => {
          return element === item.id ? arrGenres.push(item.name) : null;
        });
      }

      return arrGenres.join(', ');
    };

    const genres = getGenres();

    const handleClickDelFilm = () => {
      dispatch(setDeleteFilm(info));
      history.push('/');
    };

    const element = (
      <div className='info-page'>
        {isAdmin ? (
          <div>
            <button
              className='btn-del'
              onClick={handleClickDelFilm}>
            </button>
            <Link className='btn-edit'
                  to={`/change-film/${info.id}`}>
            </Link>
          </div>
        ) : null}
        <img className='poster' src={getPosterFilm()} alt='poster ' />
        <div className='info-film'>
          <h2>{info.title}</h2>
          <p>{info.overview}</p>
          <span>
          <b>{infoFilm().genres}: </b> {genres}
        </span>
          <span>
          <b>{infoFilm().voteAverage}:</b> {info.vote_average}
        </span>
          <span>
          <b>{infoFilm().voteCount}:</b> {info.vote_count}
        </span>
          <span>
          <b>{infoFilm().popularity}:</b> {info.popularity}
        </span>
          <span>
          <b>{infoFilm().releaseDate}:</b> {info.release_date}
        </span>
        </div>
      </div>
    );

    return isLoaded ? <Preloader /> : element;
  }
;

export default FilmInfo;
