import React from 'react';
import { render } from '../test/test-utils';
import TodoList from './TodoList';
import { unit, testClass } from '../test';
import { todo, todoCompleted, todos } from '../test/mockData';
import { mockRender, mockComponent } from '../test/mockHook';

describe('<TodoList />', () => {
  describe('Include all e2e tests that targets class', () => {
    it('todo--completed is in document', () => {
      const { container } = render(<TodoList />);
      const element = container.querySelector(`.${testClass.todoCompleted}`);
      expect(element).toBeInTheDocument();
    });
    it('todo--toggle-completed is in document', () => {
      const { container } = render(<TodoList />);
      const element = container.querySelector(`.${testClass.todoToggle}`);
      expect(element).toBeInTheDocument();
    });
    it('todo__button--remove is in document', () => {
      const { container } = render(<TodoList />);
      const element = container.querySelector(`.${testClass.todoDelete}`);
      expect(element).toBeInTheDocument();
    });
  });

  describe('Functionality', () => {
    it('can render a list', () => {
      const { getByTestId } = render(
        <TodoList todos={todos} />,
      );
      const todoList = getByTestId(unit.todoList);
      expect(todoList.children.length).toBe(3);
    });
    it('renders list in correct order', () => {
      const mockTodos = [];
      mockTodos.push(todoCompleted);
      mockTodos.push(todo);

      const { getByTestId } = render(
        <TodoList todos={mockTodos} />,
      );
      const todoList = getByTestId(unit.todoList);
      const regex = new RegExp(testClass.todoCompleted);

      const shouldBeFalse = regex.test(todoList.children[0].innerHTML);
      const shouldBeTrue = regex.test(todoList.children[1].innerHTML);

      expect(shouldBeFalse).toBe(false);
      expect(shouldBeTrue).toBe(true);
    });

    describe('Mock state before and after localStorage', () => {
      // On app load where localStorage is present
      let mockData;
      beforeEach(() => {
        const withoutLocalStorage = () => mockRender(mockComponent).render();
        mockData = withoutLocalStorage();
      });

      it('SHOULD set state as empty array', () => {
        const { getByTestId } = render(<TodoList todos={mockData} />);
        const todoList = getByTestId(unit.todoList);
        const { children: { length } } = todoList;
        expect(length).toBe(0);
      });

      const mockLocalStorage = [...todos];

      afterEach(() => {
        const withLocalStorage = () => {
          const app = mockRender(mockComponent);
          app.dispatch(mockLocalStorage);
          return mockRender(mockComponent).render();
        };
        mockData = withLocalStorage();
      });

      it('SHOULD set state from localStorage', () => {
        const { getByTestId } = render(<TodoList todos={mockData} />);
        const todoList = getByTestId(unit.todoList);
        const { children: { length } } = todoList;
        expect(length).toBe(mockLocalStorage.length);
      });
    });
  });
});
