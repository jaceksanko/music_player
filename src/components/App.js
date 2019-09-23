import React from 'react';
import '../css/app.scss';
import Player from './Player';
import Playlist from './Playlist';

class App extends React.Component {
  state = {
    buttonsStatus: {
      displayStatus: "displayOff",
      playStatus: "play"
    },
    seekBarVolume: {
      volumeLevel: 50
    },
    progressBar: {
      duration: 360,
      progress: 260
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
        buttonsStatus.playStatus = "pause";
        break;
      case "pause":
        buttonsStatus.playStatus = "play";
        break;
      default:
        buttonsStatus.playStatus = "pause";
    }
    this.setState({buttonsStatus});
  };

  changeSeekBar = (element) => {
    const seekBarVolume = {...this.state.seekBarVolume};
    seekBarVolume.volumeLevel = element.target.value;
    this.setState({seekBarVolume});
  }

  render() {
    return (
      <main className="App">
        <Player
          togglePlaylist={this.togglePlaylist}
          playListDisplay={this.state.buttonsStatus.displayStatus}
          togglePlay={this.togglePlay}
          playStatus={this.state.buttonsStatus.playStatus}
          seekBarVolume={this.state.seekBarVolume}
          changeSeekBar={this.changeSeekBar}
          progressBar={this.state.progressBar}
        />
        <Playlist 
          playListDisplay={this.state.buttonsStatus.displayStatus}
          togglePlaylist={this.togglePlaylist}
          />
      </main>
    );
  }
}

export default App;
