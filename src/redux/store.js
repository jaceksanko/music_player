import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import * as data from '../data/songs.json'

const defaultState = {
  displayStatus: "displayOff",
  playStatus: "play",
  volumeLevel: 50,
  duration: data.artist.songs[0].duration,
  progress: data.artist.songs[0].duration/3,
  nameArtist: data.artist.name,
  nameSong: data.artist.songs[0].name,
  artist: data.artist
};

export const middlewares = [logger];

const store = createStore(rootReducer, defaultState, applyMiddleware(...middlewares));

export default store;