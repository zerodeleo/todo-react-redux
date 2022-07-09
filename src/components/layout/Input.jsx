/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Input = props => (
  <>
    <input
      {...props}
      values={null} />
    { props.list && props.values
      ? (
        <datalist id={props.list}>
          { props.values.map(value => <option label={value} key={value} value={value} />) }
        </datalist>
      )
      : null}
  </>
);

export default Input;
