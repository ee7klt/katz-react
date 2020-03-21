import React from 'react';

const Artist = ({artist}) => {
  if (!artist) return null;
  const {name, images, followers, popularity, genres} = artist;
  return (
    <div>
      <h2>{name}</h2>
      <img
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover'
        }}
        src={images[0] && images[0].url}
        alt="profilepicture"
      />
      <p>Followers: {followers.total}</p>
      <p>Popularity: {popularity}</p>
      <p>Genres: {genres.join(', ')}</p>

    </div>
  )
}


export default Artist;
