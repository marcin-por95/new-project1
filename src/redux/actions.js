// actions.js
import ActionTypes from './actionTypes';

export const addCardAction = ({ title, columnId, listId }) => ({
    type: ActionTypes.ADD_CARD,
    payload: { title, columnId, listId, id: Math.floor(Math.random() * 9999) }
});

export const addColumnAction = ({ title, icon, listId }) => ({
    type: ActionTypes.ADD_COLUMN,
    payload: { title, icon, listId, id: Math.floor(Math.random() * 9999) }
});

export const updateSearchString = payload => ({
    type: ActionTypes.UPDATE_SEARCH,
    payload
});
export const addList = payload => ({
    type: 'ADD_LIST',
    payload
});