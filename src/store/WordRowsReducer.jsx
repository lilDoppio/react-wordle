const defaultState = {
    firstRow: [],
    secondRow: [],
    thirdRow: [],
    fourth: [],
    fifth: [],
    sixth: [],
}

export const WordRowsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FIRST_ROW_CURRENT':
            return {...state, firstRow: action.payload}

        case 'SET_SECOND_ROW_CURRENT':
            return {...state, secondRow: action.payload}

        case 'SET_THIRD_ROW_CURRENT':
            return {...state, thirdRow: action.payload}
            
        case 'SET_FOURTH_ROW_CURRENT':
            return {...state, fourth: action.payload}

        case 'SET_FIFTH_ROW_CURRENT':
            return {...state, fifth: action.payload}

        case 'SET_SIXTH_ROW_CURRENT':
            return {...state, sixth: action.payload}

        default:
            return state
    }
}