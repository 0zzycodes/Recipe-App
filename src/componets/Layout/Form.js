import React, { Component } from 'react';
import { Consumer } from '../../context';

class Search extends Component {
  state = {
    name: ''
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    const app_id = 'bf2e3665';
    const api_key = 'f7106d7cc5b3ea330ad3f5aae0ffb911';
    const url = `https://api.edamam.com/search?q=${
      this.state.name
    }&app_id=${app_id}&app_key=${api_key}`;
    dispatch({ type: 'SEARCH', payload: [] });
    dispatch({ type: 'ERROR', payload: '' });
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const data = response.hits;
        dispatch({ type: 'SEARCH', payload: data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', payload: err });
      });
    this.setState({
      name: ''
    });
  };
  render() {
    const { name } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
              <input
                name="name"
                type="text"
                value={name}
                placeholder="Search Recipe..."
                onChange={this.handleChange}
              />
              <button>Search</button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
