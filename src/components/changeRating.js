import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSort, setPage, setLang } from '../store/actions';

const ChangeRating = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.sort);
  const { isAdmin } = useSelector((state) => state.auth);
  const { lang } = useSelector((state) => state.lang);

  const changeShort = {
    ru: {
      popularity: 'Нет',
      voteAverageDesc: 'Рейтинг по убыванию',
      voteAverageAsc: 'Рейтинг по возрастанию',
      releaseDateDesc: 'Дата выпуска по убыванию',
      releaseDateAsc: 'Дата выпуска по возрастанию',
    },
    us: {
      popularity: 'None',
      voteAverageDesc: 'Rating Descending',
      voteAverageAsc: 'Rating Ascending',
      releaseDateDesc: 'Release Date Descending',
      releaseDateAsc: 'Release Date Ascending',
    },
  };
  const ch = lang === 'ru-RU' ? changeShort.ru : changeShort.us;

  const handleChange = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(setPage(1));
  };
  const handleChangeRu = () => {
    dispatch(setLang('ru-RU'));
  };
  const handleChangeEng = () => {
    dispatch(setLang('en-US'));
  };

  return (
    <section className='section-select'>
      <select className='select' onChange={handleChange} value={sort}>
        {/* {lang === 'ru-RU' ? changeShort.ru : changeShort.us} */}
        <option value='popularity.desc' defaultValue>
          {ch.popularity}
        </option>
        <option value='vote_average.desc'> {ch.voteAverageDesc} &#8595;</option>
        <option value='vote_average.asc'>{ch.voteAverageAsc} &#8593;</option>
        <option value='release_date.desc'>{ch.releaseDateDesc} &#8595;</option>
        <option value='release_date.asc'>{ch.releaseDateAsc} &#8593;</option>
      </select>
      {isAdmin ? <Link className='btn-add' to='/add-film'> </Link> : null}
      <div>
        <button className='btn-lang' onClick={handleChangeRu}>
          RU
        </button>
        <button className='btn-lang' onClick={handleChangeEng}>
          ENG
        </button>
      </div>
    </section>
  );
};

export default ChangeRating;
