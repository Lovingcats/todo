import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
      <div>
        {todos && todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    );
  };
  

export default TodoList;
