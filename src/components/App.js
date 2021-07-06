import { Component } from 'react';

// import Preloader from './preloader';
import Header from './header';
import Main from './main';
import Pagination from './pagination';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <!-- Прелоадер --> */}
        {/* <Preloader /> */}
        <Header />
        <Main />
        <Pagination />
      </div>
    );
  }
}

export default App;
