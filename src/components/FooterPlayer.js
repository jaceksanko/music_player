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
    const pausePlay = (this.props.buttonsStatus.playStatus === "play") ?
      <PlaySVG/> : <PauseSVG/>;
    return (
      <div className="footerPlayer">
        <button className="share">
          <ShareSVG/>
        </button>

        <div className="buttonsControl">
          <button className="previous">
            <PreviousSVG/>
          </button>
          <button className="pausePlay" onClick={() => this.props.togglePlay()}>
            {pausePlay}
          </button>
          <button className="next">
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