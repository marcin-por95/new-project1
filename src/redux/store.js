import { createStore } from 'redux';
import initialState from './initialState';
import ActionTypes from './actionTypes';
import strContains from '../utils/strContains';

export const getColumnsByList = (state, listId) =>
    state.columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getFilteredCards = (state, columnId) =>
    state.cards.filter(card => card.columnId === columnId && strContains(card.title, state.searchString));

export const getListById = (state, listId) =>
    state.lists.find(list => list.id === listId);

export const getFavorite = state => state.cards.filter(card => card.isFavorite);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COLUMN:
            return { ...state, columns: [...state.columns, action.payload] };

        case ActionTypes.ADD_CARD:
            return { ...state, cards: [...state.cards, action.payload] };

        case ActionTypes.UPDATE_SEARCH:
            return { ...state, searchString: action.payload };
        case ActionTypes.ADD_LIST:
            return { ...state, lists: [...state.lists, { ...action.payload }] };

        case ActionTypes.TOGGLE_CARD_FAVORITE:
            return {
                ...state,
                cards: state.cards.map(card =>
                    card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
                )
            };

        default:
            return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
