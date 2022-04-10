const defaultState = {
    currentWord: [],
    unknownWord: ['Л', 'О', 'Ж', 'К', 'А'],
}

export const CurrentWordReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_LETTER':
            return {...state, currentWord: [...state.currentWord, action.payload]}

        case 'REMOVE_LETTER':
            return {...state, currentWord: state.currentWord.filter((_, i) => i !== action.payload - 1)}

        case 'SET_CURRENT_WORD':
            return {...state, currentWord: action.payload}

        case 'REMOVE_ALL_LETTERS':
            return {...state, currentWord: []}

        default:
            return state
    }
}