export const TOGGLE_PLAYLIST = 'TOGGLE_PLAYLIST',
  TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE',
  CHANGE_SEEK_BAR = 'CHANGE_SEEK_BAR',
  CHANGE_SONG_NEXT = 'CHANGE_SONG_NEXT',
  CHANGE_SONG_PREV = 'CHANGE_SONG_PREV',
  CHOOSE_SONG = 'CHOSE_SONG';

export const togglePlaylist = () => ({
  type: TOGGLE_PLAYLIST
});

export const togglePlay = () => ({
  type: TOGGLE_PLAY_PAUSE
});

export const changeSeekBar = (elementTargetValue) => ({
  type: CHANGE_SEEK_BAR,
  payload: elementTargetValue
});

export const changeSongNext = () => ({
  type: CHANGE_SONG_NEXT
});

export const changeSongPrev = () => ({
  type: CHANGE_SONG_PREV
});

export const chooseSong = (songId) => ({
  type: CHOOSE_SONG,
  payload: songId
});