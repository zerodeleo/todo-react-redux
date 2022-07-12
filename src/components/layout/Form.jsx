import React from 'react';

// Components
import Input from './Input';
import Button from './Button';

// e2e tests
import { testClass, testId } from '../../test';

const Form = ({
  handleChange, handleSubmit, inputValues, mockTodos,
}) => (
  <form className={testClass.todoForm} onSubmit={handleSubmit}>
    <Input
      autoFocus
      className={testClass.todoInputTitle}
      id={testId.todoInput}
      type="text"
      name="title"
      values={mockTodos}
      value={inputValues.title}
      placeholder="Title ..."
      onChange={handleChange} />
    <Input
      className={testClass.todoInputDescription}
      type="text"
      name="description"
      placeholder="Description ..."
      value={inputValues.description}
      onChange={handleChange} />
    <Button
      className={testClass.addTodo}
      id={testId.addTodo}
      type="submit"
      txt="Add Todo" />
  </form>
);

export default Form;
