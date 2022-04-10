const defaultState = {
    firstRow: [],
    secondRow: [],
    thirdRow: [],
}

export const WordRowsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_LETTER':
            return {...state, firstRow: [...state.firstRow, action.payload]}

        case 'REMOVE_LETTER':
            return {...state, firstRow: state.firstRow.filter((_, i) => i !== action.payload - 1)}

        default:
            return state
    }
}