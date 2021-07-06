import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGenres } from '../store/actions';

const FilmInfo = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch]);
  console.log(genres[0].map((item) => console.log(item.id)));
  return (
    <div className="info-page">
      <img
        class="poster"
        src="https://image.tmdb.org/t/p/w500${poster_path}"
        onError="this.src='../images/content/unnamed.jpg'"
        alt="poster ${title}"
      />
      <div className="info-film">
        <h2>${title}</h2>
        <p>${overview}</p>
        <span>
          <b>Genres: </b> ${allGenres}
        </span>
        <span>
          <b>Vote average:</b> ${vote_average}
        </span>
        <span>
          <b>Vote count:</b> ${vote_count}
        </span>
        <span>
          <b>Popularity,:</b> ${popularity}
        </span>
        <span>
          <b>Release date:</b> ${release_date}
        </span>
      </div>
    </div>
  );
};

export default FilmInfo;
