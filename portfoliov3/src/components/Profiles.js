import React from 'react';
import SOCIALPROFILES from '../data/socialProfiles';


const Profile = props =>  {
    const {title, description, image, link} = props.profile;
    return (
      <div style={{margin:10}} >
      <a href={link} >
      <img src= {image} style = {{width: 40}} />
      </a>
      </div>
    )
}


const Profiles = ()=>  (
      <div>
        <h2>Connect with me!</h2>
        <div style={{display:'flex', flexDirection: 'row'}}>
        {
          SOCIALPROFILES.map(PROFILE => {
            return (
              <div key={PROFILE.id}>
              <Profile  profile={PROFILE}/>
              </div>
            )
          }
        )
        }
        </div>
    </div>

    )




export default Profiles;
