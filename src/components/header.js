import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="home-page">
        {' '}
      </Link>
      <span className="user-name"></span>
      <Link to="/auth" className="sign">
        Sign in/Sign up
      </Link>
    </header>
  );
}
export default Header;
