import React from 'react';
import '../css/playlist.scss';
import { ReactComponent as ArrowSVG } from "../images/arrow.svg";
import SongsList from './SongsList';
import { connect } from "react-redux";
import { togglePlaylist } from "../redux/actionsCreator"

class Playlist extends React.Component {
  render() {
    const textClass = `playlist ${this.props.playListDisplay}`;
    return (
      <div className={textClass}>
        <header className="playListHeader">
          <button 
            className="arrow"
            onClick={() => this.props.togglePlaylist()}
            >
            <ArrowSVG/>
          </button>
          <h3>Playlist</h3>
        </header>
        <section className="playListSection">
          <SongsList/>
          <div className="bottomShadow"/>
        </section>

        
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

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);