import React from 'react';
//import '../css/player.scss';

class ImageArtist extends React.Component {
  render() {
    return (
      <div className="imageArtist">
          <img src={require("../images/Icona_Pop_2012-119598_ETOALL_low.png")} alt="imageArtist"/>

      </div>
    );
  }
}

export default ImageArtist;