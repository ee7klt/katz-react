import React, {Component} from 'react';
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';


class App extends Component {
  state = {artistQuery: '', artist: null, topTracks: null};

  updateArtistQuery = event => {
    //console.log('event.target.value',event.target.value);
    this.setState({artistQuery: event.target.value});
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist = () =>  {
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(res => res.json())
      .then(data => {
        if (data.artists.total > 0) {
          const artist = data.artists.items[0];
          this.setState({artist});
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(res => res.json())
            .then(data => {
              this.setState({topTracks:data})
            })
            .catch(error => alert(error.message));
        }
      })
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
          <p>{JSON.stringify(this.state.topTracks)}</p>
      </div>
    )
  }
}



export default App;
