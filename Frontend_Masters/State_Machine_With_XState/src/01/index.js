const elBox = document.querySelector('#box');

// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  switch (state) {
    case 'active':
      if (event === 'click') {
        return 'inactive';
      } else {
        return state;
      }
    case 'inactive':
      if (event === 'click') {
        return 'active';
      } else {
        return state;
      }
    default:
      return state;
  }
}

// Keep track of your current state
let currentState = 'inactive';

function send(event) {
  currentState = transition(currentState, event);

  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  send('click');
});
