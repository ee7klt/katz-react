import React, {Component} from 'react';
import Projects from './Projects';


class App extends Component {
  state={displayBio: false};
  toggleDisplayBio = () => {
    console.log(this.state)
    this.setState({displayBio: !this.state.displayBio});
  }

  render() {

    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Alex</p>
        <p>I'm a Machine Learning Engineer</p>
        {this.state.displayBio ? (  <div>
            <p>I live in Fukuoka, and I code every day</p>
            <p>My favorite language is Python</p>
            <p>Besides coding I like learning new languages</p>
            <div><button onClick={this.toggleDisplayBio}>Show less</button></div>
          </div>) : (<div><button onClick={this.toggleDisplayBio}>Read more</button></div>)}
            <hr />
            <Projects />
      </div>
    )
  }
}

export default App;
