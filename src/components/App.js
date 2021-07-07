import { Component } from 'react';

// import Preloader from './preloader';
import Header from './header';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <!-- Прелоадер --> */}
        {/* <Preloader /> */}
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
