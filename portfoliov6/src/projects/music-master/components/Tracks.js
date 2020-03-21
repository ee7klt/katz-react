import React, {Component} from 'react';

class Tracks extends Component {
  state = {currentTrack: null ,playing: false, audio: null};


  trackIcon = (track) => {
    if (track.preview_url == null) {
      return (
        <span>N/A</span>
      )
    }

    if (
      this.state.playing &&
      (track.id === this.state.currentTrack)
    ) {
    return (
      <i className="material-icons material-large">pause_circle_outline</i>
    )}

    return (
      <i className="material-icons material-large">play_circle_outline</i>
    )
  }

  toggleAudio = (id, previewUrl) => () => {
    if (id !== this.state.currentTrack) {
      if (this.state.audio !== null)  {this.state.audio.pause();}
      const audio = new Audio(previewUrl);
      audio.volume = 0.1;
      console.log(id, audio)
      audio.play();
      this.setState({currentTrack:id, playing: true, audio})
    }
    else {
    if (!this.state.playing) {
        this.state.audio.play();
        this.setState({playing: true});
        this.props.setHello();
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
              className='track'
              onClick = {this.toggleAudio(id,preview_url)}
            >
              <img
                className='track-image'
                src={album.images[0].url} alt='track-album-image'
              />
              <p className='track-text'>{name}</p>
              <p className='track-icon'>{this.trackIcon(track)}</p>
            </div>
          )
        })
      }
      </div>
    )
  }

}


export default Tracks;
