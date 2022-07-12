import React from 'react';
import { connect } from 'react-redux';

// Actions
import { toggleTodo, deleteTodo } from '../store/actions/todoActions';

// Components
import TodoItem from './TodoItem';

// e2e tests
import { testClass, testId, unit } from '../test';

const TodoList = ({ todos, deleteTodoDispatch, toggleTodoDispatch }) => (
  <section data-testid={unit.todoList} id={testId.todoList} className={testClass.todoList}>
    {todos
      ? todos.map(todo => (
        !todo.isDone
          ? (
            <TodoItem
              className={`${testClass.todoUnCompleted} ${testClass.todoItemContainer}`}
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodoDispatch}
              toggleTodo={toggleTodoDispatch} />
          )
          : null
      )) : null}
    {todos
      ? todos.map(todo => (
        todo.isDone
          ? (
            <TodoItem
              className={`${testClass.todoCompleted} ${testClass.todoItemContainer}`}
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodoDispatch}
              toggleTodo={toggleTodoDispatch} />
          )
          : null
      )) : null}
  </section>
);
const mapStateToProps = state => {
  localStorage.setItem('state', JSON.stringify(state));
  return {
    todos: state,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteTodoDispatch: id => dispatch(deleteTodo(id)),
  toggleTodoDispatch: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
