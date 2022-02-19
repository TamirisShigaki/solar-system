import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="container-system" data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>

        <div className="container-planet">
          {
            planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
