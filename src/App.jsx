import React from 'react';
import './App.css';

// Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <TodoForm />
    <TodoList />
  </div>
);

export default App;
