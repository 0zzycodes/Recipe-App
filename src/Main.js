import React, { Component } from 'react';
import Showcase from './componets/Layout/Showcase';
import About from './componets/Layout/About/About';
import Recipes from './componets/Recipes';
import Footer from './componets/Layout/Footer';
import './App.css';
class Main extends Component {
  state = {
    recipes: [],
    search: ''
  };

  fetchData = url => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const data = response.hits;
        this.setState({
          recipes: data
        });
      });
  };

  componentDidMount() {
    const app_id = 'bf2e3665';
    const api_key = 'f7106d7cc5b3ea330ad3f5aae0ffb911';
    const searchArray = ['flower', 'fud', 'desert', 'fudge'];
    const defaultSearch =
      searchArray[Math.floor(Math.random() * searchArray.length)];
    const url = `https://api.edamam.com/search?q=${defaultSearch}&app_id=${app_id}&app_key=${api_key}`;
    this.fetchData(url);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    event.preventDefault();
    const app_id = 'bf2e3665';
    const api_key = 'f7106d7cc5b3ea330ad3f5aae0ffb911';
    const url = `https://api.edamam.com/search?q=${
      this.state.search
    }&app_id=${app_id}&app_key=${api_key}`;
    this.fetchData(url);
    this.setState({
      search: ' '
    });
  };

  render() {
    let OutputResp = '';
    if (this.state.recipes === []) {
      OutputResp = <h1>Loading</h1>;
    } else {
      OutputResp = <Recipes Respdata={this.state} />;
    }
    return (
      <div className="App">
        <Showcase Change={this.handleChange} Submit={this.handleSearch} />
        {OutputResp}
        <Footer />
      </div>
    );
  }
}

export default Main;
