import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from '../store/reducers/todoReducer';
import * as mockData from './mockData';

// custom render that includes redux provider
const render = (ui,
  { initialState = mockData.todos,
    store = createStore(todoReducer,
      initialState = mockData.todos), ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
