/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Header = props => <h1 {...props}>{ props.txt }</h1>;

export default Header;
