import { v4 as uuidv4 } from 'uuid';
import * as types from '../types';

const ls = localStorage.getItem('state');
const initState = JSON.parse(ls) || [];

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO: {
      return [...state, {
        ...payload,
        id: uuidv4(),
        isDone: false,
        createdAt: new Date().getTime(),
      }];
    }
    case types.TOGGLE_TODO: {
      return state.map(el => (el.id === payload
        ? { ...el, isDone: !el.isDone }
        : el));
    }
    case types.DELETE_TODO: {
      return state.filter(el => el.id !== payload);
    }
    default:
      return state;
  }
};

export default todoReducer;
