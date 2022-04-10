const defaultState = {
    firstRow: [],
    secondRow: [],
    thirdRow: [],
}

export const WordRowsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FIRST_ROW_ADD_LETTER':
            return {...state, firstRow: [...state.firstRow, action.payload]}

        case 'FIRST_ROW_REMOVE_LETTER':
            return {...state, firstRow: state.firstRow.filter((_, i) => i !== action.payload - 1)}

        case 'SECOND_ROW_ADD_LETTER':
            return {...state, secondRow: [...state.secondRow, action.payload]}

        case 'SECOND_ROW_ADD_LETTER_ROW_REMOVE_LETTER':
            return {...state, secondRow: state.secondRow.filter((_, i) => i !== action.payload - 1)}
    
        case 'THIRD_ROW_ADD_LETTER':
            return {...state, thirdRow: [...state.thirdRow, action.payload]}

        case 'THIRD_ROW_REMOVE_LETTER':
            return {...state, thirdRow: state.thirdRow.filter((_, i) => i !== action.payload - 1)}

        default:
            return state
    }
}