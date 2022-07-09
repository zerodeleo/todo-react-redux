import React from 'react';
import { connect } from 'react-redux';

// Actions
import { updateTodo, deleteTodo } from '../store/actions/todoActions';

// Components
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodoDispatch, updateTodoDispatch }) => (
  <section>
    {todos
      ? todos.map((todo, idx) => (
        !todo.isDone
          ? (
            <TodoItem
              key={todo.createdAt}
              todo={todo}
              idx={idx}
              deleteTodo={deleteTodoDispatch}
              updateTodo={updateTodoDispatch} />
          )
          : null
      )) : null}
    {todos
      ? todos.map((todo, idx) => (
        todo.isDone
          ? (
            <TodoItem
              key={todo.createdAt}
              todo={todo}
              idx={idx}
              deleteTodo={deleteTodoDispatch}
              updateTodo={updateTodoDispatch} />
          )
          : null
      )) : null}
  </section>
);
const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteTodoDispatch: id => dispatch(deleteTodo(id)),
  updateTodoDispatch: id => dispatch(updateTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
