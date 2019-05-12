import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Test', duration: '4:05' },
    { title: 'Test 2', duration: '3:20'}
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers( {
  songs: songsReducer,
  selectedSong: selectedSongReducer
} );