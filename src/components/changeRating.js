import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSort, setPage } from '../store/actions';

const ChangeRating = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.sort);
  const { isAdmin } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(setPage(1));
  };
  return (
    <section className="section-select">
      <select className="select" onChange={handleChange} value={sort}>
        <option value="popularity.desc" defaultValue>
          none
        </option>
        <option value="vote_average.desc">Rating Descending &#8595;</option>
        <option value="vote_average.asc">Rating Ascending &#8593;</option>
        <option value="release_date.desc">
          Release Date Descending &#8595;
        </option>
        <option value="release_date.asc">Release Date Ascending &#8593;</option>
      </select>
      {isAdmin ? <Link className="btn-add" to="/add-film"></Link> : null}
    </section>
  );
};

export default ChangeRating;
