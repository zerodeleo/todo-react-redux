import todoReducer from './todoReducer';
import * as mockData from '../../test/mockData';
import * as types from '../types';

describe('todoReducer', () => {
  it('Should add todo', () => {
    const state = mockData.todos;
    const payload = mockData.todo;
    const action = { type: types.ADD_TODO, payload };
    const nextState = todoReducer(state, action);
    expect(nextState).to.equal(payload);
  });
});
