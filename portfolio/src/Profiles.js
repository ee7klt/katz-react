import React, {Component} from 'react';
import SOCIALPROFILES from './data/socialProfiles';


class Profile extends Component {
  render() {
    const {title, description, image, link} = this.props.profile;
    return (
      <div>
      {title}
      <img src= {image} style = {{width: 20}} />
      </div>

    )
  }
}


class Profiles extends Component {
  render() {
    return (
      SOCIALPROFILES.map(PROFILE => {
        return (
          <div>
          <Profile key={PROFILE.id} profile={PROFILE}/>
          </div>
        )
      })

    )
  }
}


export default Profiles;
