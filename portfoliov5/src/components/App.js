import React, {Component} from 'react';
import Projects from './Projects';
import Profiles from './Profiles';
import profilePicture from '../assets/profile.png';
import Title from './Title';
import Header from './Header';

class App extends Component {
  state={displayBio: false};
  toggleDisplayBio = () => {
    console.log(this.state)
    this.setState({displayBio: !this.state.displayBio});
  }

  render() {

    return (
      <div >

      <img src={profilePicture} alt='profile picture' className='profile'  />
        <h1>Hello!</h1>
        <p>My name is Alex</p>
        <Title />
        {this.state.displayBio ? (  <div>
            <p>I live in Stockholm, and I code every day</p>
            <p>My favorite language is Python</p>
            <p>Besides coding I like learning new languages</p>
            <div><button onClick={this.toggleDisplayBio}>Show less</button></div>
          </div>) : (<div><button onClick={this.toggleDisplayBio}>Read more</button></div>)}
            <hr />
            <Projects />
            <hr />
            <Profiles />

      </div>
    )
  }
}

const AppWithHeader = () => {
  return (
    <Header Component={App} />
  )
}


export default AppWithHeader;
