import React from 'react';
import '../css/app.scss';
import Player from './Player';
import Playlist from './Playlist';

class App extends React.Component {
  state = {
    buttonsStatus: {
      displayStatus: "displayOff",
      playStatus: "play"
    }
  };

  togglePlaylist = () => {
    const buttonsStatus = {...this.state.buttonsStatus};

    switch (buttonsStatus.displayStatus) {
      case "displayOff":
        buttonsStatus.displayStatus = "displayOn";
        break;
      case "displayOn":
        buttonsStatus.displayStatus = "displayOff";
        break;
      default:
        buttonsStatus.displayStatus = "displayOff";
    }
    this.setState({buttonsStatus});
  };

  togglePlay = () => {
    const buttonsStatus = {...this.state.buttonsStatus};
    switch (buttonsStatus.playStatus) {
      case "play":
        buttonsStatus.displayStatus = "pause";
        break;
      case "pause":
        buttonsStatus.displayStatus = "play";
        break;
      default:
        buttonsStatus.displayStatus = "pause";
    }
    this.setState({buttonsStatus});
  };

  render() {
    return (
      <main className="App">
        <Player
          togglePlaylist={this.togglePlaylist}
          playListDisplay={this.state.buttonsStatus.displayStatus}
          togglePlay={this.togglePlay}
          playStatus={this.state.buttonsStatus.playStatus}
        />
        <Playlist playListDisplay={this.state.buttonsStatus.displayStatus}/>
      </main>
    );
  }
}

export default App;
