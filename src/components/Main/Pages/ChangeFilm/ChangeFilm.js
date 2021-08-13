import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ChangeFilm = () => {
  const { id } = useParams();

  const { data } = useSelector((state) => state.gallery);
  // const { genre } = useSelector((state) => state.genres);

  let info = data.find((item) => item.id === +id);

  const handleChange = (e) => {
    info.title += e.target.value;
    console.log(info.title);
  };

  return (
    <div className="main">
      <h1>Change film: {info.title}</h1>
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        onChange={handleChange}
        value={info.title}
        placeholder={info.title}
      />
      {/* <h1>ChangeFilm id: {id}</h1>
     
          <input
            placeholder={el[1]}
            className={el[0].valid ? '' : 'inputError'}
            onChange={(ev) => changeInput(el[1], ev.target.value)}
            value={el[0].value}
          />
          {el[0].valid ? '' : `Incorrect ${el[1]}`}
        </>
      ))}
      <input
        type="date"
        placeholder={'realiseDate'}
        className={realiseDate.valid ? '' : 'inputError'}
        onChange={(ev) => changeInput('realiseDate', ev.target.value)}
        value={realiseDate.value}
      />
      {realiseDate.valid ? '' : `Incorrect realiseDate`}
      <label>
        <input
          placeholder="Alult"
          type="checkbox"
          checked={isAdult.value ? 'checked' : ''}
          onChange={(ev) => adultInputChange(isAdult.value)}
        />
        Adult
      </label>
      <h3>Genres</h3>
      <div className={genres.valid ? 'genres' : 'genres inputError'}>
        {genresMap.map((el) => (
          <label>
            <input
              type="checkbox"
              checked={genres.value.indexOf(el.id) != -1 ? 'checked' : ''}
              onChange={(ev) => genresInputChange(el.id)}
            />
            {el.name}
          </label>
        ))}
        {genres.valid ? '' : 'Incorrect genres'}
      </div>
      <button
      // onClick={() =>
      //   validateInputs(
      //     'addFilm',
      //     'title',
      //     'description',
      //     'pathImage',
      //     'popularity',
      //     'realiseDate',
      //     'genres',
      //     'averageVote',
      //     'voteCount',
      //     'isAdult'
      //   )
      // }
      >
        Change
      </button> */}
    </div>
  );
};

export default ChangeFilm;
