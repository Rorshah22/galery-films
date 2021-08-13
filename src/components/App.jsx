import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadGallery } from '../store/middleware';
import Header from './header/header';
import Main from './main/main';

const App = () => {
  const dispatch = useDispatch();

  const { currentPage } = useSelector((state) => state.page);
  const { sort } = useSelector((state) => state.sort);
  const { lang } = useSelector((state) => state.lang);
  const { isAdmin } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadGallery(currentPage, sort, lang));
  }, [currentPage, sort, isAdmin, lang, dispatch]);

  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
