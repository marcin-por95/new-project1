import shortid from "shortid";
import createActionName from "../utils/createActionName";
import strContains from "../utils/strContains";


const REMOVE_CARD = createActionName('REMOVE_CARD');
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');


export const getFavorite = state => state.cards.filter((card) => card.isFavorite === true);
export const getFilteredCards = ({
                                     cards,
                                     searchString
                                 }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const removeCard = payload => ({type: REMOVE_CARD, payload});
export const addCardAction = payload => ({type: ADD_CARD, payload});
export const toggleCardFavorite = payload => ({type: TOGGLE_CARD_FAVORITE, payload});



const cardsReducer = (statePart = [], action) => {

    switch (action.type) {
        case ADD_CARD:
            return [...statePart, {...action.payload, id: shortid()}];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? {...card, isFavorite: !card.isFavorite} : card);

        case REMOVE_CARD:
            return [...statePart.filter(card => card.id !== action.payload)];
        default:
            return statePart;
    }
}
export default cardsReducer;


