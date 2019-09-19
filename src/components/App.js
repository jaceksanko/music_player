import React from 'react';
import '../css/app.scss';
import Player from './Player';
import Playlist from './Playlist';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Player/>
        <Playlist/>
      </main>
    );
  }
}

export default App;
