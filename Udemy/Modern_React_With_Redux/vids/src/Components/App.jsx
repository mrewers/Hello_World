import React, { Component } from 'react';

import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

import youtube from '../api/youtube';

class App extends Component {
  state = {
    selectedVideo: null,
    videos: []
  }

  componentDidMount() {
    this.onTermSubmit( 'reactjs' );
  }
  
  onTermSubmit = async term => {
    const response = await youtube.get(
      '/search/',
      {
        params: { q: term }
      }
    );

    this.setState( {
      selectedVideo: response.data.items[0],
      videos: response.data.items
    } );
  }
  
  onVideoSelect = video => {
    this.setState( {
      selectedVideo: video
    } );
  }

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <div className="ui container">
        <SearchBar formSubmit={ this.onTermSubmit } />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer
                video={ selectedVideo }
              />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={ this.onVideoSelect}
                videos={ videos }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;