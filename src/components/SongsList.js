import React from 'react';
import ShareSVG from "./svgComponents/ShareSVG";
import FavoriteSVG from "./svgComponents/FavoriteSVG";

class SongsList extends React.Component {

  changeSecondToMMSS = (s) => {
    return(s-(s%=60))/60+(9<s?':':':0')+s
  };

  render() {
    const { error, isLoaded, artist } = this.props.playlist;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="ulSongsList">
          {artist.songs.map(song => (
            <li key={song.id} className="liSongsList" >
              <div className="choseSong" data-id={song.id} onClick={(el) => this.props.choseSong(el)}>
                <div className="songDurationAndArtist">
                  {this.changeSecondToMMSS(song.duration)} | {artist.name}
                </div>
                <h2 className="songTitle">{song.name}</h2>
              </div>
              <div className="songButton">
                <div className="shareSong">
                  <ShareSVG/>
                </div>
                <div className="favoriteSong">
                  <FavoriteSVG/>
                </div>

              </div>

            </li>
          ))}
        </ul>
      );
    }
  }
}

export default SongsList;