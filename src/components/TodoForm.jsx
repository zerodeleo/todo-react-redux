import React, { useState } from 'react';
import { connect } from 'react-redux';

// Actions
import { addTodo } from '../store/actions/todoActions';
import { testClass } from '../test';

// Components
import Form from './layout/Form';
import Err from './layout/Err';

const TodoForm = ({ addTodoDispatch }) => {
  const [inputValues, setInputValues] = useState({ title: '', description: '' });
  const [err, setErr] = useState(false);

  const handleChange = e => {
    setErr(false);
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValues.title === '') {
      setErr(true);
      return;
    }
    addTodoDispatch(inputValues);
    setInputValues({ title: '', description: '' });
  };

  return (
    <section className={testClass.todoFormContainer}>
      <Form
        inputValues={inputValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      <article className={testClass.todoFormErrorContainer}>
        { err ? <Err msg="Please input title" /> : null}
      </article>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodoDispatch: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
