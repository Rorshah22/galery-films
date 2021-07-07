import { useDispatch, useSelector } from 'react-redux';
import { setSort, setPage } from '../store/actions';

const ChangeRating = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.sort);

  const handleChange = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(setPage(1));
    console.log(sort);
  };
  return (
    <select className="select" onClick={handleChange}>
      <option value="popularity.desc" defaultValue>
        none
      </option>
      <option value="vote_average.desc">Rating Descending &#8595;</option>
      <option value="vote_average.asc">Rating Ascending &#8593;</option>
      <option value="release_date.desc">Release Date Descending &#8595;</option>
      <option value="release_date.asc">Release Date Ascending &#8593;</option>
    </select>
  );
};

export default ChangeRating;
