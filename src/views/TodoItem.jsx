import React from 'react';

export default ({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.isfinished}
      onChange={() => {
        todo.finished = !todo.finished;
      }}
    />
    {todo.title}
  </li>
);
