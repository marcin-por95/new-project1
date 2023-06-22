import createActionName from "../utils/createActionName";

// selectors
export const getSearchString = state => state.searchString;

// actions
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH');


export const updateSearchString = payload => ({ type: UPDATE_SEARCH, payload });
const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;