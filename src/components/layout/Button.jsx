/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Button = props => <button {...props} txt={null}>{ props.txt }</button>;

export default Button;
