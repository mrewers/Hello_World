import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component to produce some HTML.
const App = () => {
  return <h1>Masternode Tracker</h1>;
}

// Insert the generated HTML in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
