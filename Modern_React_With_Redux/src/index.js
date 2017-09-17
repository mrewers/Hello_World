import React from 'react';
import ReactDOM from 'react-dom';

import YouTube from '../keys.js'
import SearchBar from '../components/search_bar.js';

const API_KEY = <YouTube />;

// Create a new component to produce some HTML.
const App = () => {
  // return <h1>Masternode Tracker</h1>;
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Insert the generated HTML in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
