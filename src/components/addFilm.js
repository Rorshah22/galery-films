import { Redirect } from 'react-router-dom';
// import { isAuth } from '../store/actions';
import { useSelector } from 'react-redux';

const AddFilm = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  return isAdmin ? <div>ladd film</div> : <Redirect to="/auth" />;
};
//  {
// const { isAuth } = useSelector((state) => state.auth);
// isAuth ? <div>ladd film</div> : <Redirect to="/" />;
// return <div>dsadasdasdasdasdasdasdasdasd</div>;
// };

export default AddFilm;

//   <form action="" class='add-film'>
//   <input type="text" placeholder="title" minlength=3 required>
//   <textarea name="" id="" rows="4" minlength=6 maxlength=150 placeholder='overview' required></textarea>
//   <input type="text" placeholder="poster_path" required>
//   <input type="number" placeholder="popularity" required>
//   <input type="date" placeholder="release_date" required>
//   <select id="genres" multiple>

//   </select>
//   <input type="number" placeholder="vote_average" required>
//   <input type="number" placeholder="vote_count" required>
//   <input type="checkbox" id='adult' checked>
//   <label for="adult">Adult</label>
//   <div class='btn-action'>
//     <input type="submit" value='Add'>
//     <input type="reset" value="Clear">
//   </div>

// </form>
