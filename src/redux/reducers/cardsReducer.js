const initialState = {
    cards: [],
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARDS':
            return {
                ...state, cards: action.payload
            }
        case 'ADD_CARD':
            return {
                ...state, cards: [...state.cards, {...action.payload}]
            }
        case 'DELETE_CARD':
            return {
                ...state, cards: action.payload
            }
        default:
            return state
    }
}

export default cardsReducer;

