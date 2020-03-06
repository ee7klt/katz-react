import React, {Component} from 'react';





class Tracks extends Component {
  state = {currentTrack: null ,playing: false, audio: null};

  toggleAudio = (id, previewUrl) => () => {
    if (id !== this.state.currentTrack) {
      if (this.state.audio !== null)  {this.state.audio.pause();}
      const audio = new Audio(previewUrl);
      console.log(id, audio)
      audio.play();
      this.setState({currentTrack:id, playing: true, audio})
    }
    else {
    if (!this.state.playing) {
        this.state.audio.play();
        this.setState({playing: true});
      }  else {
        this.state.audio.pause();
        this.setState({playing: false});
      }
    }
  }

  render() {
    const {tracks} = this.props;
    if (tracks.length == 0) return null;
    return (
      <div>
        <h2>Top Tracks</h2>
      {
        tracks.map(track => {
          const {name, album, id, preview_url} = track
          return (
            <div
              key = {id}
              style = {{
                display: 'flex'
              }}
              onClick = {this.toggleAudio(id,preview_url)}
            >
              <img
                style = {{
                  width: 30,
                  height: 30
                }}
                src={album.images[0].url} alt='track-album-image'
              />
              <p>{name}</p>
            </div>
          )
        })
      }
      </div>
    )
  }

}


export default Tracks;
