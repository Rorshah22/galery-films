import { useSelector } from 'react-redux';
import noImage from '../images/content/unnamed.jpg';
import { useParams } from 'react-router-dom';

const FilmInfo = ({ image, title, vote, date }) => {
  const params = useParams();
  console.log(params);

  const { gallery } = useSelector((state) => state.gallery);
  const { genres } = useSelector((state) => state.genres);
  console.log(gallery);

  let linkImage = '';
  if (image !== null) {
    linkImage = `https://image.tmdb.org/t/p/w200${image}`;
  } else {
    linkImage = noImage;
  }
  return (
    <div className="info-page">
      <img className="poster" src={linkImage} alt="poster ${title}" />
      <div className="info-film">
        <h2>{title}</h2>
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
};

export default FilmInfo;
