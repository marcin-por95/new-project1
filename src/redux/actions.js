import TYPES from "./actionTypes";

export const addCardAction = ({title, columnId}) => ({
    type: TYPES.ADD_CARD,
    payload: {title, columnId, id: Math.floor(Math.random() * 9999)}
});
export const addColumnAction = ({title, icon}) => ({
    type: TYPES.ADD_COLUMN,
    payload: {title, icon, id: Math.floor(Math.random() * 9999)}
});
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCH', payload });
