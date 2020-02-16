import React, {Component} from 'react';
import FetchArtist from './FetchArtist';


class App extends Component {
  state = {artistQuery: ''};

  updateArtistQuery = event => {
    //console.log('event.target.value',event.target.value);
    this.setState({artistQuery: event.target.value});
    console.log(this.state)
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist()
    }
  }

  searchArtist = () => {
    console.log('this.state',this.state);


  }

  render() {
    return (
      <div >
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'
        />
        <button onClick={this.searchArtist}>Search</button>
        <FetchArtist />
      </div>
    )
  }
}



export default App;
