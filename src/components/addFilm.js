import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setAddFilm } from '../store/actions';

const AddFilm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      adult: false,
      backdrop_path: '',
      id: null,
      original_language: 'en',
      original_title: '',
      popularity: null,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: null,
      vote_count: null,
    },
    onSubmit: (values) => {
      dispatch(setAddFilm(values));
      alert('fd');
    },
  });
  return (
    <div className="modal_block">
      <form className="add-film" onSubmit={formik.handleSubmit}>
        <input type="text" placeholder="title" required />
        <textarea name="" id="" rows="4" placeholder="overview" required />
        <input type="text" placeholder="poster_path" required />
        <input type="number" placeholder="popularity" required />
        <input type="date" placeholder="release_date" required />
        <select id="genres" multiple></select>
        <input type="number" placeholder="vote_average" required />
        <input type="number" placeholder="vote_count" required />
        <input type="checkbox" id="adult" checked />
        <label for="adult">Adult</label>
        <div className="btn-action">
          <input type="submit" value="Add" />
          <input type="reset" value="Clear" />
        </div>
      </form>
    </div>
  );
};
export default AddFilm;
