import React from 'react';

// Components
import Button from './layout/Button';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const handleDelete = e => {
    e.stopPropagation();
    e.preventDefault();
    deleteTodo(todo.id);
  };

  const handleUpdate = e => {
    e.stopPropagation();
    e.preventDefault();
    updateTodo(todo.id);
  };

  return (
    <article>
      <button type="submit" onClick={handleUpdate}>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <Button onClick={handleDelete} type="submit" txt="delete" />
      </button>
    </article>

  );
};

export default TodoItem;
