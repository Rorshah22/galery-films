import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import noImage from '../../../../images/content/unnamed.jpg';
import { setDeleteFilm } from '../../../../store/actions';

const Film = ({ item }) => {
  const dispatch = useDispatch();

  const { isAdmin } = useSelector((state) => state.auth);

  const image = item.poster_path,
    title = item.title,
    vote = item.vote_average,
    date = item.release_date;

  let linkImage = '';

  if (image !== null) {
    linkImage = `https://image.tmdb.org/t/p/w200${image}`;
  } else {
    linkImage = noImage;
  }

  const handleClickDelFilm = () => {
    dispatch(setDeleteFilm(item));
  };

  return (
    <div className='card-film'>
      <div className='vote' hidden>
        {vote}
      </div>
      <div className='date' hidden>
        {date}
      </div>
      <figure>
        <Link to={`/movie/${item.id}`}>
          <img className='poster' src={linkImage} alt={title} />
        </Link>
        <figcaption>{title}</figcaption>
      </figure>
      {isAdmin ? (
        <button className='btn-del' onClick={handleClickDelFilm}></button>
      ) : null}
    </div>
  );
};

export default Film;
