import React from 'react';

// Components
import Button from './layout/Button';

// e2e tests
import { testClass } from '../test';

const TodoItem = ({
  todo, deleteTodo, toggleTodo, className,
}) => {
  const handleDelete = e => {
    e.stopPropagation();
    e.preventDefault();
    deleteTodo(todo.id);
  };

  const handleUpdate = e => {
    e.stopPropagation();
    e.preventDefault();
    toggleTodo(todo.id);
  };

  return (
    <article className={className}>
      <button className={testClass.todoToggle} type="submit" onClick={handleUpdate}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        {todo.isDone ? <Button className={testClass.todoDelete} onClick={handleDelete} type="submit" txt="X" /> : null}
      </button>
    </article>

  );
};

export default TodoItem;
