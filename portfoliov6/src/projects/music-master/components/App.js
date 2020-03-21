import React, {Component} from 'react';
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

class App extends Component {
  state = { artist: null, tracks: [], hello: false };

  componentDidMount() {
    this.searchArtist('radiohead')
  }

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

setHello = () => {
  console.log(this.state.hello);
  this.setState(prevState => {
    hello: !prevState.hello
  });
  console.log(this.state.hello);
}


  render() {
    return (
      <div >
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} hello={this.state.hello} />
        <Artist artist = {this.state.artist}/>
        <Tracks tracks={this.state.tracks} hello={this.setHello} />
      </div>
    )
  }
}



export default App;
