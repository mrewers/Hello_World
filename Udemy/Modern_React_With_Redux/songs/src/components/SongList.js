import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    const { selectSong, songs } = this.props;

    return songs.map( song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={ () => selectSong(song) }
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    });
  }
  
  render() {
    return (
      <div className="ui divided list">{this.renderList()}</div>
    )
  }
}

const mapStateToProps = state => {
  const songs = state && state.songs ? state.songs : [];

  return {
    songs
  };
}

export default connect(mapStateToProps, {
  selectSong
})(SongList);
