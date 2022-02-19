import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <div>
          <Title headline="🚀 Missões" />
        </div>
        <div className="container-missions">
          {
            missions.map((mission) => (
              <MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
