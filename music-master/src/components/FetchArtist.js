import React, {Component} from 'react';

class FetchArtist extends Component {
  state = {music: {}};
  componentDidMount() {
    fetch('https://spotify-api-wrapper.appspot.com/artist/bruno')
      .then(response => response.json())
      .then(json => this.setState({music: json}))
  }


render() {
  const music = JSON.stringify(this.state.music.artists);

  return (
    <div>
    <h2>{music}</h2>
    </div>

  )
}

}


export default FetchArtist;
