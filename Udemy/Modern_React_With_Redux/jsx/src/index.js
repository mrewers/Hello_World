import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';

import Comment from './Components/Comment';

const App = () => (
  <div>
    <h1>Hello World</h1>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <div className="ui container comments">
      <Comment
        author={faker.name.firstName()}
        date={faker.date.past().toDateString()}
        image={faker.image.avatar()}
        text={faker.lorem.sentence()}
      />
      <Comment
        author={faker.name.firstName()}
        date={faker.date.past().toDateString()}
        image={faker.image.avatar()}
        text={faker.lorem.sentence()}
      />
      <Comment
        author={faker.name.firstName()}
        date={faker.date.past().toDateString()}
        image={faker.image.avatar()}
        text={faker.lorem.sentence()}
      />
    </div>
  </div>
)

ReactDom.render(
  <App />,
  document.querySelector('#root')
)