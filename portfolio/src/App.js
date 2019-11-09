import React, {Component} from 'react';



class App extends Component {
  constructor() {
    super();
    this.state={displayBio: false};

  }


  // readMore = () => {
  //   this.setState({displayBio: true})
  // }
  //
  // readLess = () => {
  //   this.setState({displayBio: false})
  // }

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

      </div>
    )
  }
}

export default App;
