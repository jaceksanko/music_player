import React from 'react';
import '../css/player.scss';
import HeaderPlayer from "./HeaderPlayer";
import ImageArtist from "./ImageArtist";
import FooterPlayer from "./FooterPlayer";

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <HeaderPlayer/>
        <ImageArtist/>
        <FooterPlayer/>
      </div>
    );
  }
}

export default Player;