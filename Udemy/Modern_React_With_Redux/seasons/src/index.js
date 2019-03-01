import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './Components/SeasonDisplay';

class App extends React.Component {
  render() {
    return (
      <SeasonDisplay />
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

