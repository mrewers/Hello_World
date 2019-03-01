import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './Components/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ( position ) => {
        this.setState( { lat: position.coords.latitude } )
      },
      ( err ) => console.log( err )
    );
  }
  
  render() {
    return (
      <SeasonDisplay latitude={ this.state.lat } />
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

