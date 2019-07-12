import React from 'react';
import { Consumer } from '../../context';

const Details = () => {
  return (
    <Consumer>
      {value => {
        const { details } = value;
        const {
          label,
          image,
          ingredient,
          calories,
          nutrient,
          externalLink
        } = details;
        const { CA, CHOCDF, FAT, FIBTG } = nutrient;
        const ingredients = ingredient.map(ingr => (
          <li key={ingr.text}>{ingr.text}</li>
        ));
        return (
          <div className="Details">
            <div className="Top">
              <img src={image} alt={label} />
              <div className="Right">
                <h1>{label}</h1>
                <h3>Calories: {Math.floor(calories)}</h3>
                <div className="Nutrient">
                  <div className="Boxe">
                    <span className="Labell">{CA.label}</span>
                    <span className="Quantt">
                      {(CA.quantity / 1000).toFixed(2)}g
                    </span>
                  </div>
                  <div className="Boxe">
                    <span className="Labell">{CHOCDF.label}</span>
                    <span className="Quantt">
                      {Math.floor(CHOCDF.quantity)}
                      {CHOCDF.unit}
                    </span>
                  </div>
                  <div className="Boxe">
                    <span className="Labell">{FAT.label}</span>
                    <span className="Quantt">
                      {Math.floor(FAT.quantity)}
                      {FAT.unit}
                    </span>
                  </div>
                  <div className="Boxe">
                    <span className="Labell">{FIBTG.label}</span>
                    <span className="Quantt">
                      {Math.floor(FIBTG.quantity)}
                      {FIBTG.unit}
                    </span>
                  </div>
                </div>
                <a href={externalLink}>View Source</a>
              </div>
            </div>
            <ul className="Ingredients">{ingredients}</ul>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Details;
