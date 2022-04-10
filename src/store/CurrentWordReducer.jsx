const defaultState = {
    currentWord: [],
    unknownWord: ['Л', 'О', 'Ж', 'К', 'А'],
}

export const CurrentWordReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case 'CHOSE_ROW':
        //     return {...state, firstRow: [...state.currentWord, action.payload]}

        case 'SET_CURRENT_WORD':
            return {...state, currentWord: action.payload}

        default:
            return state
    }
}