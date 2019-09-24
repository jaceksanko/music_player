import React from 'react';
import '../css/player.scss';
import RandomSVG from "./svgComponents/RandomSVG";
import RedoSVG from "./svgComponents/RedoSVG";
import RepeatSVG from "./svgComponents/RepeatSVG"
import HmburgerMenuSVG from "./svgComponents/HamburgerMenuSVG";

import { connect } from "react-redux";
import { togglePlaylist } from "../redux/actionsCreator"

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

const mapStateToProps = state => ({
  playListDisplay: state.displayStatus,
});
const mapDispatchToProps = dispatch => ({
  togglePlaylist: () => dispatch(togglePlaylist())
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderPlayer);