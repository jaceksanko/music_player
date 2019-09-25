import {applyMiddleware, createStore} from "redux";
import {middlewares} from "./redux/store";
import rootReducer from "./redux/root-reducer";
import * as data from "./data/songs";


export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const initialState = {
  displayStatus: "displayOff",
  playStatus: "play",
  volumeLevel: 50,
  duration: data.artist.songs[0].duration,
  progress: data.artist.songs[0].duration / 3,
  nameArtist: data.artist.name,
  nameSong: data.artist.songs[0].name,
  artist: data.artist
};

