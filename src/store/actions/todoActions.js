import * as types from '../types';

export const addTodo = payload => ({ type: types.ADD_TODO, payload });
export const updateTodo = payload => ({ type: types.UPDATE_TODO, payload });
export const deleteTodo = payload => ({ type: types.DELETE_TODO, payload });
