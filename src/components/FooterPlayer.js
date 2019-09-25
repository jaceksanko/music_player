import React from 'react';
import '../css/player.scss';
import { ReactComponent as ShareSVG } from "../images/share.svg";
import { ReactComponent as PreviousSVG } from "../images/previous.svg";
import { ReactComponent as NextSVG } from "../images/next.svg";
import { ReactComponent as FavoriteSVG } from "../images/favorite.svg";
import { ReactComponent as PlaySVG } from "../images/play2.svg";
import { ReactComponent as PauseSVG } from "../images/pause.svg";

import { connect } from "react-redux";
import { togglePlaylist, changeSeekBar, changeSongPrev, togglePlay, changeSongNext } from "../redux/actionsCreator"

class FooterPlayer extends React.Component {
  render() {
    const pausePlay = (this.props.playStatus === "play") ? <PlaySVG/> : <PauseSVG/>;
    const backgroundStyle = {
      background: `linear-gradient(to left, rgb(237, 94, 116) 0%, rgb(237, 94, 116) 
      ${100-this.props.volumeLevel}%, rgb(255, 255, 255) 
      ${100-this.props.volumeLevel}%, rgb(255, 255, 255) 100%)`
    };
    return (
      <div className="footerPlayer">
        <div className="volume">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={this.props.volumeLevel}
            step="1" 
            className="seekBar"
            onChange={(el) => this.props.changeSeekBar(el)}
            style={backgroundStyle}
          />
        </div>

        <button className="share">
          <ShareSVG/>
        </button>

        <div className="buttonsControl">
          <button
            className="previous"
            onClick={() => this.props.changeSongPrev()}
          >
            <PreviousSVG/>
          </button>
          <div className="progressAndPausePlay">
            <progress max={this.props.duration} value={this.props.progress} className="spin circle loader"/>
            <button className="pausePlay" onClick={() => this.props.togglePlay()}>
              {pausePlay}
            </button>
          </div>
          

          <button
            className="next"
            onClick={() => this.props.changeSongNext()}
          >
            <NextSVG/>
          </button>
        </div>

        <button className="favorite">
          <FavoriteSVG/>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playStatus: state.playStatus,
  volumeLevel: state.volumeLevel,
  duration: state.duration,
  progress: state.progress,

});
const mapDispatchToProps = dispatch => ({
  changeSeekBar: (el) => dispatch(changeSeekBar(el)),
  changeSongPrev: () => dispatch(changeSongPrev()),
  togglePlaylist: () => dispatch(togglePlaylist()),
  togglePlay: () => dispatch(togglePlay()),
  changeSongNext: () => dispatch(changeSongNext())
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterPlayer);