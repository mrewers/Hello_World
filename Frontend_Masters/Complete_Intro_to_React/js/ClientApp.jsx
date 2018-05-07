import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function MyTitle(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function MyFirstComponent() {
  return ce(
    'div',
    { id: 'title-list' },
    ce(MyTitle, { title: 'The Wire', color: 'peru' }),
    ce(MyTitle, { title: 'Game of Thrones', color: 'papayawhip' }),
    ce(MyTitle, { title: 'Better Call Saul', color: 'lime' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
