import React from 'react';
import ReactDom from 'react-dom';

const getButtonText = () => (
  'Click on me!'
)

const App = () => (
  <div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {getButtonText()}
    </button>
  </div>
)

ReactDom.render(
  <App />,
  document.querySelector('#root')
)