import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        recipes: action.payload
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'DETAILS':
      return {
        ...state,
        details: action.payload
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    recipes: [],
    error: '',
    details: {},
    dispatch: action => this.setState(state => reducer(state, action))
  };
  componentDidMount() {
    const app_id = 'bf2e3665';
    const api_key = 'f7106d7cc5b3ea330ad3f5aae0ffb911';
    const searchArray = ['flower', 'fud', 'desert', 'fudge'];
    const defaultSearch =
      searchArray[Math.floor(Math.random() * searchArray.length)];
    const url = `https://api.edamam.com/search?q=${defaultSearch}&app_id=${app_id}&app_key=${api_key}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        const data = response.hits;
        // console.log(data);
        this.setState({
          recipes: data
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
