import React, {Component} from 'react';



class App extends Component {
  state = {artistQuery: '', artistId:'',topTracks:[]};

  updateArtistQuery = event => {
    //console.log('event.target.value',event.target.value);
    this.setState({artistQuery: event.target.value});
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist()
    }
  }

  searchArtist = () => {
      fetch('https://spotify-api-wrapper.appspot.com/artist/'+this.state.artistQuery)
        .then(response => response.json())
        .then(json => {
          this.setState({artistId: json.artists.items["0"].id});
          fetch('https://spotify-api-wrapper.appspot.com/artist/0du5cEVh5yTK9QJze8zA0C/top-tracks')
        })
        .then(json => this.setState({topTracks:json}));
  }

  render() {
    console.log(this.state.result)
    return (
      <div >
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'
        />
        <button onClick={this.searchArtist}>Search</button>
        <p>{JSON.stringify(this.state.artistId)}</p>
      </div>
    )
  }
}



export default App;
