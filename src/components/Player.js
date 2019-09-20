import React from 'react';
import '../css/player.scss';
import HeaderPlayer from "./HeaderPlayer";
import ImageArtist from "./ImageArtist";
import FooterPlayer from "./FooterPlayer";

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <HeaderPlayer
          togglePlaylist={this.props.togglePlaylist}
          playListDisplay={this.props.buttonsStatus.displayStatus}
        />
        <ImageArtist/>
        <FooterPlayer
          togglePlay={this.props.togglePlay}
          playStatus={this.props.buttonsStatus.playStatus}
        />
      </div>
    );
  }
}

export default Player;