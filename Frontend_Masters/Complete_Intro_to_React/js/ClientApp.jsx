import React from 'react';
import { render } from 'react-dom';

const MyTitle = function MyTitle(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function MyFirstComponent() {
  return (
    <div id="title-list">
      <MyTitle title="The Wire" color="peru" />
      <MyTitle title="Game of Thrones" color="papayawhip" />
      <MyTitle title="Better Call Saul" color="lime" />
    </div>
  );
};

render(<MyFirstComponent />);
