import React, {Component} from 'react';



class App extends Component {
  state = {artistQuery: '', result:''};

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
      fetch('https://spotify-api-wrapper.appspot.com/artist/'+this.state.artistQuery)
        .then(response => response.json())
        .then(json => this.setState({result: json}))
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
        <p>{JSON.stringify(this.state.artistQuery)}</p>
      </div>
    )
  }
}



export default App;
