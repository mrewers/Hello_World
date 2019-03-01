import React from 'react';
import ReactDOM from 'react-dom';

import Loader from './Components/Loader';
import SeasonDisplay from './Components/SeasonDisplay/SeasonDisplay';

class App extends React.Component {
  state = {
    errorMessage: '',
    lat: null
  }


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ( position ) => this.setState( { lat: position.coords.latitude } ),
      ( err ) => this.setState( { errorMessage: err.message } )
    );
  }
  
  renderContent = ( errorMessage, lat ) => {
    if ( errorMessage && !lat ) {
      return ( <div>Error: { errorMessage }</div> );
    }
    
    if ( !errorMessage && lat ) {
      return <SeasonDisplay latitude={ lat } />;
    }

    return <Loader message="Please accept location request" />
  }

  render() {
    const { errorMessage, lat } = this.state

    return (
      <div className="border red">
        {this.renderContent( errorMessage, lat )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

