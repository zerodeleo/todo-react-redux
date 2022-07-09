import React from 'react';

const Error = ({ msg }) => {
  console.log('Error components');

  return (
    <p>
      {msg}
    </p>
  );
};

export default Error;
