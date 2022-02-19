import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-card" data-testid="planet-card">
        <div className="img-planet">
          <img className="planet" src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
        <div className="name-planet">
          <p data-testid="planet-name">{ planetName }</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
