import React from 'react';
import todo from './todo.reducer';
import { addItem, changeItem, deleteItem } from '../actions/todoActions';
import { testData } from '../constants';

const state = [];

describe('test for todo reducer', () => {
  test('new item should be added', () => {
    const action = addItem(testData);
    const newState = todo(state, action);
    expect(newState.length).toBe(1);
    expect(newState[0].title).toBe('test title');
  });

  test('item should be deleted', () => {
    const deletAction = deleteItem(1);
    const stateAfterDelete = todo([testData], deletAction);
    expect(stateAfterDelete.length).toBe(0);
  });

  test('item should be true', () => {
    const deletAction = changeItem(1);
    const stateAfterDelete = todo([testData], deletAction);
    expect(stateAfterDelete[0].status).toBe(true);
  });
});
