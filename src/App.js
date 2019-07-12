import React, { Component } from 'react';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Showcase from './componets/Layout/Showcase';
import About from './componets/Layout/About/About';
import Recipes from './componets/Recipes';
// import Footer from './componets/Layout/Footer';
import './App.css';
import Navbar from './componets/Layout/Navbar/Navbar';
import Details from './componets/Layout/Details';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/">
              <Showcase />
              <Recipes />
              {/* <Footer /> */}
            </Route>
            <Route exact path="/details" component={Details} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
