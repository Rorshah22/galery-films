import { Route, Switch } from 'react-router-dom';

import Gallery from './gallery';
import ChangeRating from './changeRating';
import FilmInfo from './filmInfo';
import Pagination from './pagination';
import NotFound from './notfound';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <section className="section-select">
            <ChangeRating />
          </section>
          <Gallery />
          <Pagination />
        </Route>
        <Route path="/movie/:id" exact>
          <FilmInfo />
        </Route>
        <NotFound />
      </Switch>
    </main>
  );
};

export default Main;
