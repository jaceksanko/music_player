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
          playListDisplay={this.props.playListDisplay}
        />
        <ImageArtist
          displaySong={this.props.displaySong}
        />
        <FooterPlayer
          togglePlay={this.props.togglePlay}
          playStatus={this.props.playStatus}
          seekBarVolume={this.props.seekBarVolume}
          changeSeekBar={this.props.changeSeekBar}
          progressBar={this.props.progressBar}
          changeSongNext={this.props.changeSongNext}
          changeSongPrev={this.props.changeSongPrev}
        />
      </div>
    );
  }
}

export default Player;