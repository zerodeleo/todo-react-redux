import React from 'react';
import { testClass } from '../../test';

const Err = ({ msg }) => (
  <p className={testClass.todoFormError}>
    {msg}
  </p>
);

export default Err;
