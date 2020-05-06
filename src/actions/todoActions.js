import { DELETE_ITEM, ADD_ITEM, CHANGE_ITEM } from './actionTypes';

export const addItem = (data) => ({ type: ADD_ITEM, payload: data });

export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: { id } });

export const changeItem = (id) => ({ type: CHANGE_ITEM, payload: { id } });
