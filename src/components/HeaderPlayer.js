import React from 'react';
import '../css/player.scss';
import { ReactComponent as RandomSVG } from "../images/random.svg";
import { ReactComponent as RedoSVG } from "../images/redo.svg";
import { ReactComponent as RepeatSVG } from "../images/repeat.svg";
import HmburgerMenuSVG from "../images/HamburgerMenuSVG";

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