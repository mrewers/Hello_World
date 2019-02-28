import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';

import Comment from './Components/Comment';
import ApprovalCard from './Components/ApprovalCard';

const App = () => (
  <div>
    <h1>Hello World</h1>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author={faker.name.firstName()}
          date={faker.date.past().toDateString()}
          image={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author={faker.name.firstName()}
          date={faker.date.past().toDateString()}
          image={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author={faker.name.firstName()}
          date={faker.date.past().toDateString()}
          image={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
    
  </div>
)

ReactDom.render(
  <App />,
  document.querySelector('#root')
)