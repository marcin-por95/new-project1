import { createStore } from 'redux';
import initialState from './initialState';
import ActionTypes from './actionTypes';
import strContains from '../utils/strContains';



export const getColumnsByList = (state, listId) =>
    state.columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getFilteredCards = (state, columnId) =>
    state.cards.filter(card => card.columnId === columnId && strContains(card.title, state.searchString));

export const updateSearchString = payload => ({ type: ActionTypes.UPDATE_SEARCH, payload });

export const getListById = (state, listId) =>
    state.lists.find(list => list.id === listId);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COLUMN:
            return { ...state, columns: [...state.columns, action.payload] };

        case ActionTypes.ADD_CARD:
            return { ...state, cards: [...state.cards, action.payload] };

        case ActionTypes.UPDATE_SEARCH:
            return { ...state, searchString: action.payload };

        default:
            return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
