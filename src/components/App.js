import React from 'react';
import '../css/app.scss';
import Player from './Player';
import Playlist from './Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsStatus: {
        displayStatus: "displayOff",
        playStatus: "play"
      },
      seekBarVolume: {
        volumeLevel: 50
      },
      progressBar: {},
      displaySong: {},
      playlist: {
        error: null,
        isLoaded: false,
        artist: {}
      }
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/songs.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            playlist: {
              isLoaded: true,
              artist: result.artist
            },
            progressBar: {
              duration: result.artist.songs[0].duration,
              progress: result.artist.songs[0].duration/3
            },
            displaySong: {
              nameArtist: result.artist.name,
              nameSong: result.artist.songs[0].name
            }
          });
        },
        (error) => {
          this.setState({
            playlist: {
              isLoaded: true,
              error
            }
          });
        }
      )
  }

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
  };

  changeSongNext = () => {
    const displaySong = {...this.state.displaySong};
    const idActualSong = this.state.playlist.artist.songs.findIndex((el) => el.name === displaySong.nameSong);
    const songsLength = this.state.playlist.artist.songs.length;
    displaySong.nameSong = (idActualSong === (songsLength -1))?
      this.state.playlist.artist.songs[0].name :
      this.state.playlist.artist.songs[idActualSong+1].name;
    this.setState({displaySong});
  };

  changeSongPrev = () => {
    const displaySong = {...this.state.displaySong};
    const idActualSong = this.state.playlist.artist.songs.findIndex((el) => el.name === displaySong.nameSong);
    const songsLength = this.state.playlist.artist.songs.length;
    displaySong.nameSong = (idActualSong === 0)?
      this.state.playlist.artist.songs[songsLength -1].name :
      this.state.playlist.artist.songs[idActualSong-1].name;
    this.setState({displaySong});
  };

  choseSong = (ev) => {
    const displaySong = {...this.state.displaySong};
    const songId = ev.currentTarget.dataset.id;
    displaySong.nameSong = this.state.playlist.artist.songs[songId].name;

    const buttonsStatus = {...this.state.buttonsStatus};
    buttonsStatus.displayStatus = "displayOff";

    this.setState({displaySong, buttonsStatus});
  };

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
          displaySong={this.state.displaySong}
          changeSongNext={this.changeSongNext}
          changeSongPrev={this.changeSongPrev}

        />
        <Playlist 
          playListDisplay={this.state.buttonsStatus.displayStatus}
          togglePlaylist={this.togglePlaylist}
          playlist={this.state.playlist}
          choseSong={this.choseSong}
        />
      </main>
    );
  }
}

export default App;
