const Pet = ( props ) => {
  return React.createElement(
    'div', {}, [
      React.createElement( 'h1', {}, props.name ),
      React.createElement( 'h2', {}, props.animal ),
      React.createElement( 'h2', {}, props.breed ),
  ] );
}

class App extends React.Component {
  handleTitleClick() {
    alert( 'You clicked on the title' );
  }
  
  render() {
    return React.createElement(
      'div', {}, [
        React.createElement( 'h1', { onClick: this.handleTitleClick }, 'Adopt Me'),
        React.createElement( Pet, {
          name: 'Fido',
          animal: 'dog',
          breed: 'bloodhound'
        } ),
        React.createElement( Pet, {
          name: 'Izzard',
          animal: 'lizard',
          breed: 'iguana'
        } ),
        React.createElement( Pet, {
          name: 'Cluck',
          animal: 'bird',
          breed: 'chicken'
        } )
      ]
    );
  }
}

ReactDOM.render( React.createElement(App), document.getElementById('root'))