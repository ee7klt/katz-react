import React from 'react';

const Tracks = ({tracks}) => {
  if (tracks.length == 0) return null;
  console.log({tracks})
  return (
    <div>
      <h2>Top Tracks</h2>
    {
      tracks.map(track => {
        const {name, album, id} = track
        return (
          <div
            key = {id}
            style = {{
              display: 'flex'
            }}
          >
            <span>{name}</span>(<em>{album.name}</em>)
          </div>
        )
      })
    }
    </div>
  )
}


export default Tracks;
