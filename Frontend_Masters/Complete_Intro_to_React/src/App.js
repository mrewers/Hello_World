const Pet = ( props ) => {
  return React.createElement(
    'div', {}, [
      React.createElement( 'h1', {}, props.name ),
      React.createElement( 'h2', {}, props.animal ),
      React.createElement( 'h2', {}, props.breed ),
  ] );
}

const App = () => {
  return React.createElement(
    'div', {}, [
      React.createElement( 'h1', {}, 'Adopt Me'),
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
  ] );
}

ReactDOM.render( React.createElement(App), document.getElementById('root'))