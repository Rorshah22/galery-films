// import { useSelector } from 'react-redux';
import noImage from '../images/content/unnamed.jpg';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Preloader from './preloader';

const FilmInfo = () => {
  const { id } = useParams();
  const { data, isLoaded } = useSelector((state) => state.gallery);
  // const { genres } = useSelector((state) => state.genres);

  let info = data.find((item) => item.id === +id);

  console.log(info);
  let linkImage = '';
  if (info.poster_path !== null) {
    linkImage = `https://image.tmdb.org/t/p/w200${info.poster_path}`;
  } else {
    linkImage = noImage;
  }
  const element = (
    <div className="info-page">
      <img className="poster" src={linkImage} alt="poster " />
      <div className="info-film">
        <h2>title</h2>
        <p>overview</p>
        <span>
          <b>Genres: </b> allGenres
        </span>
        <span>
          <b>Vote average:</b> vote_average
        </span>
        <span>
          <b>Vote count:</b> vote_count
        </span>
        <span>
          <b>Popularity,:</b> popularity
        </span>
        <span>
          <b>Release date:</b> release_date
        </span>
      </div>
    </div>
  );

  return isLoaded ? <Preloader /> : element;
};

export default FilmInfo;
