import React from 'react';

// Components
import Input from './Input';
import Button from './Button';

const Form = ({
  handleChange, handleSubmit, inputValues, mockTodos,
}) => (
  <form onSubmit={handleSubmit}>
    <Input
      type="text"
      name="title"
      values={mockTodos}
      value={inputValues.title}
      placeholder="Title ..."
      onChange={handleChange} />
    <Input
      type="text"
      name="description"
      placeholder="Description ..."
      value={inputValues.description}
      onChange={handleChange} />
    <Button
      type="submit"
      txt="Add Todo" />
  </form>
);

export default Form;
