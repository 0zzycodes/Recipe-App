import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../context';

class Recipes extends Component {
  handleShow = dispatch => {
    const {
      label,
      image,
      ingredients,
      calories,
      totalNutrients,
      url
    } = this.props.recipe;
    console.log(this.props.recipe);
    const details = {
      label: label,
      image: image,
      ingredient: ingredients,
      calories: calories,
      nutrient: totalNutrients,
      externalLink: url
    };
    sessionStorage.setItem('Details', JSON.stringify(details));
    const detail = JSON.parse(sessionStorage.getItem('Details'));
    dispatch({ type: 'DETAILS', payload: detail });
  };

  render() {
    const { label, image } = this.props.recipe;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="Box">
              <div className="Image">
                <img src={image} alt="Food" />
              </div>
              <h4 className="FoodName">{label}</h4>
              <Link
                className="Button"
                onClick={this.handleShow.bind(this, dispatch)}
                to="/details"
              >
                Show Details
              </Link>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Recipes;
