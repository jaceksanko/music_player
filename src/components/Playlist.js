import React from 'react';
import '../css/playlist.scss';

class Playlist extends React.Component {
  render() {
    const textClass = `playlist ${this.props.buttonsStatus.displayStatus}`;
    return (
      <div className={textClass}>

      </div>
    );
  }
}

export default Playlist;