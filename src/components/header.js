import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home-page">
        {' '}
      </Link>
      <span className="user-name"></span>
      <Link to="/auth" className="sign-up">
        Sign in/Sign up
      </Link>
    </header>
  );
};
export default Header;
