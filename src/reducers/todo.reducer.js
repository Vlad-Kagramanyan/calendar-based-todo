import createReducer from './createReducer';

import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_ITEM,
} from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    title: 'some title',
    description: 'some description',
    status: false,
    date: 7,
  },
  {
    id: 2,
    title: 'every title',
    description: 'some description',
    status: true,
    date: 7,
  },
];

const ACTION_HANDLERS = {
  [ADD_ITEM]: (state, payload) => ([...state, payload]),
  [DELETE_ITEM]: (state, payload) => [...state.filter((todo) => todo.id !== payload.id)],
  [CHANGE_ITEM]: (state, payload) => [...state.map((todo) => {
    if (todo.id === payload.id) {
      return { ...todo, status: true };
    }
    return todo;
  })],
};

export default createReducer(initialState, ACTION_HANDLERS);
