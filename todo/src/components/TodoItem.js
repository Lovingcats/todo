import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const TodoItem = forwardRef(({ todo, onDelete, onEdit }, ref) => {
  return (
    <div ref={ref}>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onEdit(todo)}>Edit</button>
    </div>
  );
});

export default TodoItem;
