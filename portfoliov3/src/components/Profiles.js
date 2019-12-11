import React, {Component} from 'react';
import SOCIALPROFILES from '../data/socialProfiles';


class Profile extends Component {
  render() {
    const {title, description, image, link} = this.props.profile;
    return (
      <div style={{margin:10}} >
      <a href={link} >
      <img src= {image} style = {{width: 40}} />
      </a>
      </div>

    )
  }
}


class Profiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <div style={{display:'flex', flexDirection: 'row'}}>
        {
          SOCIALPROFILES.map(PROFILE => {
            return (
              <div>
              <Profile key={PROFILE.id} profile={PROFILE}/>
              </div>
            )
          }
        )
        }
        </div>
    </div>

    )
  }
}


export default Profiles;
