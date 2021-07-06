import noImage from '../images/content/unnamed.jpg';

const Film = ({ image, title, vote, date }) => {
  let linkImage;
  if (linkImage !== null) {
    linkImage = `https://image.tmdb.org/t/p/w200${image}`;
  } else {
    linkImage = noImage;
  }
  return (
    <div className="card-film" data-id="id">
      <div className="vote" hidden>
        {vote}
      </div>
      <div className="date" hidden>
        {date}
      </div>
      <figure>
        <img className="poster" src={linkImage} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};

export default Film;
