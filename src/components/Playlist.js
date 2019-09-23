import React from 'react';
import '../css/playlist.scss';
import ArrowSVG from './svgComponents/ArrowSVG';

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
          
        </section>
        
      </div>
    );
  }
}

export default Playlist;