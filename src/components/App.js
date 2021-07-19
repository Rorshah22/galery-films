import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadGallery } from '../store/actions';
import Header from './header';
import Main from './main';

const App = () => {
  const dispatch = useDispatch();

  const { currentPage } = useSelector((state) => state.page);
  const { sort } = useSelector((state) => state.sort);
  const { isAdmin } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadGallery(currentPage, sort));
  }, [currentPage, sort, isAdmin, dispatch]);

  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
