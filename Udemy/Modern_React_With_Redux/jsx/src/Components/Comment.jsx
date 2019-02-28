import React from 'react';

const Comment = ({ author, date, image, text }) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img src={ image } alt="avatar"/>
    </a>
    <div className="content">
      <a href="/" className="author">
        { author }
      </a>
      <div className="metadata">
        <span className="date">
          { date }
        </span>
      </div>
      <div className="text">
        { text }
      </div>
    </div>
  </div>
);

export default Comment;