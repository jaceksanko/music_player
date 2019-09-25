import React from 'react';
import { ReactComponent as ShareSVG } from "../images/share.svg";
import { ReactComponent as FavoriteSVG } from "../images/favorite.svg";
import { connect } from "react-redux";
import {choseSong} from "../redux/actionsCreator";

class SongsList extends React.Component {
  changeSecondToMMSS = (s) => {
    return(s-(s%=60))/60+(9<s?':':':0')+s
  };

  render() {
    const { artist } = this.props;
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

const mapStateToProps = state => ({
  artist: state.artist
});

const mapDispatchToProps = dispatch => ({
  choseSong: (el) => dispatch(choseSong(el))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);