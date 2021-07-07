import { Link } from 'react-router-dom';
import noImage from '../images/content/unnamed.jpg';

const Film = ({ image, title, vote, date }) => {
  let linkImage = '';
  if (image !== null) {
    linkImage = `https://image.tmdb.org/t/p/w200${image}`;
  } else {
    linkImage = noImage;
  }
  return (
    <div className="card-film">
      <div className="vote" hidden>
        {vote}
      </div>
      <div className="date" hidden>
        {date}
      </div>
      <figure>
        <Link to="/film">
          <img className="poster" src={linkImage} alt={title} />
        </Link>
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};

export default Film;
