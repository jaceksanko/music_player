import React from 'react';
import '../css/player.scss';
import RandomSVG from "./svgComponents/RandomSVG";
import RedoSVG from "./svgComponents/RedoSVG";
import RepeatSVG from "./svgComponents/RepeatSVG"
import HmburgerMenuSVG from "./svgComponents/HamburgerMenuSVG";

class HeaderPlayer extends React.Component {
  render() {
    const opacityClass = (this.props.playListDisplay === "displayOn") ? "opacityHamburgerMenu": "";
    return (
      <div className="headerPlayer">
        <div className="topOptions">
          <RandomSVG/>
          <RedoSVG/>
          <RepeatSVG/>
        </div>
        <div className="hamburgerMenu" onClick={() => this.props.togglePlaylist()}>
          <HmburgerMenuSVG opacityClass={opacityClass}/>
        </div>
      </div>
    );
  }
}

export default HeaderPlayer;