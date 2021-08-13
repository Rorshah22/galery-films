import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Gallery from './components/gallery/gallery';
import ChangeRating from './components/changerating/changeRating';
import FilmInfo from './components/filminfo/filmInfo';
import Pagination from './Pagination/pagination';
import NotFound from './Pages/Notfound/notfound';
import AddFilm from './Pages/Addfilm/addFilm';
import Authentication from './Pages/Authentication/authentication';
import Registration from './Pages/Registration/registration';
import PrivateRouter from '../PrivateRoute/PrivateRoute';
import ChangeFilm from './Pages/ChangeFilm/ChangeFilm';

const Main = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  // const { currentPage } = useSelector((state) => state.page);
  return (
    <main>
      <Switch>
        <Route path='/' exact>
          <ChangeRating />
          <Gallery />
          <Pagination />
        </Route>
        {/* <Route path="/page/:page" exact>
          <ChangeRating />
          <Gallery />
          <Pagination />
        </Route> */}
        <Route path='/movie/:id' exact>
          <FilmInfo />
        </Route>
        <PrivateRouter path='/add-film' exact isAdmin={isAdmin}>
          <AddFilm />
        </PrivateRouter>
        <PrivateRouter path='/change-film/:id' exact isAdmin={isAdmin}>
          <ChangeFilm />
        </PrivateRouter>
        <Route path='/auth'>
          <Authentication />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>
        <NotFound />
      </Switch>
    </main>
  );
};

export default Main;
