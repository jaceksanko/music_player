import {
  TOGGLE_PLAYLIST,
  TOGGLE_PLAY_PAUSE,
  CHANGE_SEEK_BAR,
  CHANGE_SONG_NEXT,
  CHANGE_SONG_PREV,
  CHOSE_SONG
} from './actionsCreator';

const rootReducer = (state, action) => {
  const idActualSong = state.artist.songs.findIndex((el) => el.name === state.nameSong);
  const songsLength = state.artist.songs.length;
  switch (action.type) {
    case TOGGLE_PLAYLIST:
      return {
        ...state,
        displayStatus: state.displayStatus === "displayOff" ? "displayOn" : "displayOff"
      };
    case TOGGLE_PLAY_PAUSE:
      return {
        ...state,
        playStatus: state.playStatus === "play" ? "pause" : "play"
      };
    case CHANGE_SEEK_BAR:
      return {
        ...state,
        volumeLevel: action.payload.target.value
      };
    case CHANGE_SONG_NEXT:
      return {
        ...state,
        nameSong: (idActualSong === (songsLength -1))?
          state.artist.songs[0].name :
          state.artist.songs[idActualSong+1].name
      };
    case CHANGE_SONG_PREV:
       return {
        ...state,
        nameSong: (idActualSong === 0)?
          state.artist.songs[songsLength -1].name :
          state.artist.songs[idActualSong-1].name
      };
    case CHOSE_SONG:
      const songId = action.payload.currentTarget.dataset.id;
      return {
        ...state,
        nameSong: state.artist.songs[songId-1].name,
        displayStatus: "displayOff"
      };
    default:
      return state
  }
};

export default rootReducer;