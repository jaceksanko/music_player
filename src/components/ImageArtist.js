import React from 'react';
import '../css/player.scss';

class ImageArtist extends React.Component {
  render() {
    return (
      <div className="imageArtist">
          <img 
            src={require("../images/Icona_Pop_2012-119598_ETOALL_low.png")} 
            alt="imageArtist"
          />
          <div className="imageFilter">
          </div>
          <div className="title">
            <h1>Icona Pop</h1>
            <h2>Still Dont't Know</h2>
          </div>
      </div>
    );
  }
}

export default ImageArtist;