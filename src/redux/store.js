import {createStore} from 'redux';
import initialState from './initialState';
import ActionTypes from "./actionTypes";

const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COLUMN:
            return {...state, columns: [...state.columns, action.payload]}

        case ActionTypes.ADD_CARD:
            return  {...state, cards: [...state.cards, action.payload]}

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