import { Component } from 'react';
import Gallery from './gallery';

class Main extends Component {
  render() {
    return (
      <main>
        <section className="section-select">
          <select className="select">
            <option value="none" defaultValue>
              none
            </option>
            <option value="rating_dec">Rating Descending &#8595;</option>
            <option value="rating_asc">Rating Ascending &#8593;</option>
            <option value="release_date_des">
              Release Date Descending &#8595;
            </option>
            <option value="release_date_asc">
              Release Date Ascending &#8593;
            </option>
          </select>
        </section>
        <Gallery />
      </main>
    );
  }
}

export default Main;
