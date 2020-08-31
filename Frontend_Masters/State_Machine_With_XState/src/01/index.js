const elBox = document.querySelector('#box');

// Switch Style
// function transition(state, event) {
//   switch (state) {
//     case 'active':
//       switch (event) {
//         case 'CLICK':
//           return 'inactive';
//         default:
//           return state;
//       }
//     case 'inactive':
//       switch (event) {
//         case 'CLICK':
//           return 'active';
//         default:
//           return state;
//       }
//     default:
//       return state;
//   }
// }

// Object Style
const machine = {
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        CLICK: 'active',
      },
    },
    active: {
      on: {
        CLICK: 'inactive',
      },
    },
  },
};

function transition(state, event) {
  return machine.states[state].on[event] || state;
}

// Keep track of your current state
let currentState = 'inactive';

function send(event) {
  currentState = transition(currentState, event);

  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  send('CLICK');
});
