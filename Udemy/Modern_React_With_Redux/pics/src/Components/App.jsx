import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList'
import unsplash from '../api/unsplash';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get( '/search/photos', {
      params: { query: term }
    } );

    this.setState( {
      images: response.data.results
    } );
  }

  render() {
    const { images } = this.state;

    return (
      <div>
        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={ this.onSearchSubmit } />
          <ImageList images={ images } />
        </div>
      </div>
    )  
  }
}

export default App;