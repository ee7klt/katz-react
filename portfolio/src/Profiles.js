import React, {Component} from 'react';
import SOCIALPROFILES from './data/socialProfiles';

class Profiles extends Component {
  render() {
    return (
      <div>
      {SOCIALPROFILES.map(profile => {
        return (
          <div>{profile.title}</div>
        )
      })}
      </div>
    )
  }
}


export default Profiles;
