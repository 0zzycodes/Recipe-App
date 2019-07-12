import React, { Component } from 'react';
import { Consumer } from '../../src/context';
import Recipe from './Recipe';
import Loader from './Layout/Loader';

class Recipes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { recipes } = value;
          const RecipeData = recipes.map(recipe => (
            <Recipe recipe={recipe.recipe} key={recipe.recipe.calories} />
          ));
          let output = recipes.length === 0 ? <Loader /> : RecipeData;

          return (
            <div className="Container">
              <div className="Recipes">{output}</div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Recipes;
