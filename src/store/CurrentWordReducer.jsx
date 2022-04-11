const defaultState = {
    currentWord: [],
    unknownWord: ['Л', 'О', 'Ж', 'К', 'А'],
    checkWord: [],
    gameStatus: 1,
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

        case 'ADD_CHECK_LETTER':
            return {...state, checkWord: [...state.checkWord, action.payload]}
        
        case 'REMOVE_ALL_CHECK_LETTERS':
            return {...state, checkWord: []}

        case 'SET_GAME_STATUS':
            return {...state, gameStatus: action.payload}

        default:
            return state
    }
}