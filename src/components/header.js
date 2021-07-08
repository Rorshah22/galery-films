import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setAuth, setAdmin } from '../store/actions';

const Header = () => {
  const dispatch = useDispatch();

  const { login, isAuth } = useSelector((state) => state.auth);

  // TODO сделать подтверждение выхода

  const handleClick = () => {
    dispatch(setAuth(false));
    dispatch(setAdmin(false));
  };

  return (
    <header className="header">
      <Link to="/" className="home-page">
        {' '}
      </Link>
      {isAuth ? (
        <div style={{ display: 'flex' }}>
          <span className="user-name">{login}</span>
          <button className="sign-up" onClick={handleClick}>
            LogOut
          </button>
        </div>
      ) : (
        <Link to="/auth" className="sign-up">
          Sign in/Sign up
        </Link>
      )}
    </header>
  );
};
export default Header;
