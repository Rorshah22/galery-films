import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Gallery from './gallery';
import ChangeRating from './changeRating';
import FilmInfo from './filmInfo';
import Pagination from './pagination';

class Main extends Component {
  render() {
    return (
      <main>
        <section className="section-select">
          <ChangeRating />
        </section>
        <Switch>
          <Route path="/" exact>
            <Gallery />
            <Pagination />
          </Route>
          <Route path="/film/:id2" exact>
            <FilmInfo key={1} />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
