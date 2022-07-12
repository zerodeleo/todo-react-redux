import React from 'react';

// Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';

// e2e test
import { testClass } from './test';

const App = () => (
  <div className="todo--container">
    <Header className={testClass.todoHeader} txt="ToDo" />
    <TodoForm />
    <TodoList />
  </div>
);

export default App;
