import React from 'react';
import '../css/player.scss';
import ShareSVG from "./svgComponents/ShareSVG";
import PreviousSVG from "./svgComponents/PreviousSVG";
import PauseSVG from "./svgComponents/PauseSVG";
import NextSVG from "./svgComponents/NextSVG";
import FavoriteSVG from "./svgComponents/FavoriteSVG";
import PlaySVG from "./svgComponents/PlaySVG";

class FooterPlayer extends React.Component {

  render() {
    const pausePlay = (this.props.playStatus === "play") ? <PlaySVG/> : <PauseSVG/>;
    const backgroundStyle = {
      background: `linear-gradient(to left, rgb(237, 94, 116) 0%, rgb(237, 94, 116) 
      ${100-this.props.seekBarVolume.volumeLevel}%, rgb(255, 255, 255) 
      ${100-this.props.seekBarVolume.volumeLevel}%, rgb(255, 255, 255) 100%)`
    }
    return (
      <div className="footerPlayer">
        <div className="volume">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={this.props.seekBarVolume.volumeLevel} 
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
            <progress max={this.props.progressBar.duration} value={this.props.progressBar.progress} className="spin circle loader"/>
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

export default FooterPlayer;