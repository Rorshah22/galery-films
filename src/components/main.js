import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Gallery from './gallery';
import ChangeRating from './changeRating';
import FilmInfo from './filmInfo';
import Pagination from './pagination';
import NotFound from './notfound';
import AddFilm from './addFilm';
import Authentication from './authentication';
import Registration from './registration';
import PrivateRouter from './PrivateRoute/PrivateRoute';

const Main = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <ChangeRating />

          <Gallery />
          <Pagination />
        </Route>
        <Route path="/movie/:id" exact>
          <FilmInfo />
        </Route>
        <PrivateRouter path="/add_film" exact isAdmin={isAdmin}>
          <AddFilm />
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
