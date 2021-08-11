import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setAuth, setAdmin } from '../store/actions';

const Header = () => {
  const dispatch = useDispatch();

  const { lang } = useSelector((state) => state.lang);
  const { login, isAuth } = useSelector((state) => state.auth);

  // TODO сделать подтверждение выхода

  const handleClick = () => {
    dispatch(setAuth(false));
    dispatch(setAdmin(false));
  };

  const authBtn = {
    ru: {
      logOut: 'Выйти',
      sign: 'Войти/Регистрация',
    },
    us: {
      logOut: 'LogOut',
      sign: 'Sign in/Sign up',
    },
  };
  const ch = lang === 'ru-RU' ? authBtn.ru : authBtn.us;

  return (
    <header className="header">
      <Link to="/" className="home-page">
        {' '}
      </Link>
      {isAuth ? (
        <div style={{ display: 'flex' }}>
          <span className="user-name">{login}</span>
          <button className="sign-up" onClick={handleClick}>
            {ch.logOut}
          </button>
        </div>
      ) : (
        <Link to="/auth" className="sign-up">
          {ch.sign}
        </Link>
      )}
    </header>
  );
};
export default Header;
