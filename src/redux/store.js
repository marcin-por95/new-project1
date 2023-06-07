import {createStore} from 'redux';
import initialState from './initialState';
import ActionTypes from "./actionTypes";
import strContains from "../utils/strContains";


export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state => state.columns);
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COLUMN:
            return {...state, columns: [...state.columns, action.payload]}

        case ActionTypes.ADD_CARD:
            return  {...state, cards: [...state.cards, action.payload]}

        case ActionTypes.SEARCH_STRING:
            return  {...state, searchString: action.payload};


        case ActionTypes.UPDATE_SEARCH:
            return {...state, searchString: action.payload};

        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;