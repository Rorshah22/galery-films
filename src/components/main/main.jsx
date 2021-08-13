import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Gallery from './components/gallery/gallery';
import ChangeRating from './components/changerating/changeRating';
import FilmInfo from './components/filminfo/filmInfo';
import Pagination from './pagination/pagination';
import NotFound from './pages/notfound/notfound';
import AddFilm from './pages/addfilm/addFilm';
import Authentication from './pages/authentication/authentication';
import Registration from './pages/registration/registration';
import PrivateRouter from '../PrivateRoute/PrivateRoute';
import ChangeFilm from './pages/changeFilm/ChangeFilm';

const Main = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  // const { currentPage } = useSelector((state) => state.page);
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <ChangeRating />
          <Gallery />
          <Pagination />
        </Route>
        {/* <Route path="/page/:page" exact>
          <ChangeRating />
          <Gallery />
          <pagination />
        </Route> */}
        <Route path="/movie/:id" exact>
          <FilmInfo />
        </Route>
        <PrivateRouter path="/add-film" exact isAdmin={isAdmin}>
          <AddFilm />
        </PrivateRouter>
        <PrivateRouter path="/change-film/:id" exact isAdmin={isAdmin}>
          <ChangeFilm />
        </PrivateRouter>
        <Route path="/auth">
          <Authentication />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <NotFound />
      </Switch>
    </main>
  );
};

export default Main;
