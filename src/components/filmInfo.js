import { useEffect } from 'react';
import noImage from '../images/content/unnamed.jpg';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadGenres } from '../store/actions';
import { setDeleteFilm } from '../store/actions';
import Preloader from './preloader';

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

  let info = data.find((item) => item.id === +id);

  document.title = info.title;

  let linkImage = '';
  if (info !== undefined && info.poster_path !== null) {
    linkImage = `https://image.tmdb.org/t/p/w500${info.poster_path}`;
  } else {
    linkImage = noImage;
  }
  let arrGenres = [];

  for (let j = 0; j < info.genre_ids.length; j++) {
    const element = info.genre_ids[j];
    // eslint-disable-next-line
    genre.find((item) => {
      if (element === item.id) {
        arrGenres.push(item.name);
      }
    });
  }
  const genres = arrGenres.join(', ');

  const handleClickDelFilm = () => {
    dispatch(setDeleteFilm(info));
    history.push('/');
  };

  // document.body.style.background = `linear-gradient(to right,
  //   rgba(19, 38, 47, 0.925) 0%,
  //   rgba(9, 28, 37, 0.925) 100%),
  //   url(https://image.tmdb.org/t/p/original${info.backdrop_path})
  //    `;
  // document.body.style.backgroundRepeat = 'no-repeat';
  // document.body.style.backgroundSize = 'cover';
  const element = (
    <div className="info-page">
      {isAdmin ? (
        <div>
          <button className="btn-del" onClick={handleClickDelFilm}></button>

          <Link className="btn-edit" to={`/change-film/${info.id}`}></Link>
        </div>
      ) : null}
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
