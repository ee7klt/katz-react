import React, {Component} from 'react';
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

class App extends Component {
  state = { artist: null, tracks: []};



  searchArtist = artistQuery =>  {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(res => res.json())
      .then(data => {
        if (data.artists.total > 0) {
          const artist = data.artists.items[0];
          this.setState({artist});
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(res => res.json())
            .then(data => {
              this.setState({tracks:data.tracks});
            })
            .catch(error => alert(error.message));
        }
      })
  }



  render() {
    return (
      <div >
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist = {this.state.artist}/>
        <Tracks tracks={this.state.tracks} />
      </div>
    )
  }
}



export default App;
