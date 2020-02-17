import React, {Component} from 'react';



class App extends Component {
  state = {artistQuery: '', topTracks:[]};

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
          return json.artists.items["0"].id;
        })
        .then(async id => {
          await Promise.all(
             fetch('https://spotify-api-wrapper.appspot.com/artist/'+id+'/top-tracks')
              .then(response => response.json())
              .then(data => this.setState({topTracks:data}))
          )
        });
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
        <p>{JSON.stringify(this.state.topTracks)}</p>
      </div>
    )
  }
}



export default App;
