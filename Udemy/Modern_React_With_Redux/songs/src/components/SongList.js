import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>SongList</div>
    )
  }
}

const mapStateToProps = state => {
  const songs = state && state.songs ? state.songs : [];

  return {
    songs
  };
}

export default connect(mapStateToProps)(SongList);
