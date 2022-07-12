import React from 'react';
import { render, screen } from './test/test-utils';
import { Provider } from 'react-redux';
import App from './App';
import { testId } from './test/index';
import store from './store';

describe('<App />', () => {
  test('SHOULD find the ToDo text', () => {
    render(<App />);
    const linkElement = screen.getByText(/ToDo/);
    expect(linkElement).toBeInTheDocument();
  });

  describe('Include all e2e tests that targets id', () => {
    it('txtTodoItemToAdd is in document', () => {
      const { container } = render(<App />);
      const element = container.querySelector(`#${testId.todoInput}`);
      expect(element).toBeInTheDocument();
    });
    it('btnAddTodo is in document', () => {
      const { container } = render(<App />);
      const element = container.querySelector(`#${testId.addTodo}`);
      expect(element).toBeInTheDocument();
    });
    it('todoList is in document', () => {
      const { container } = render(<App />);
      const element = container.querySelector(`#${testId.todoList}`);
      expect(element).toBeInTheDocument();
    });
  });
});
