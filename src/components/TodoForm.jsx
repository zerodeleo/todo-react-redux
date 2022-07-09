import React, { useState } from 'react';
import { connect } from 'react-redux';

// Actions
import { addTodo } from '../store/actions/todoActions';

// Components
import Form from './layout/Form';

const TodoForm = ({ addTodoDispatch }) => {
  const [inputValues, setInputValues] = useState({ title: '', description: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodoDispatch(inputValues);
    setInputValues({ title: '', description: '' });
  };

  return (
    <section>
      <Form
        inputValues={inputValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodoDispatch: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
