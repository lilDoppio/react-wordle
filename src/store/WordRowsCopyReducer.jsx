const defaultState = {
    firstRowCopy: [],
    secondRowCopy: [],
    thirdRowCopy: [],
    fourthRowCopy: [],
    fifthRowCopy: [],
    sixthRowCopy: [],
}

export const WordRowsCopyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FIRST_ROW_CHECK':
            return {...state, firstRowCopy: [...state.firstRowCopy, action.payload]}
          
        case 'SECOND_ROW_CHECK':
            return {...state, secondRowCopy: [...state.secondRowCopy, action.payload]}
    
        case 'THIRD_ROW_CHECK':
            return {...state, thirdRowCopy: [...state.thirdRowCopy, action.payload]}
                    
        case 'FOURTH_ROW_CHECK':
            return {...state, fourthRowCopy: [...state.fourthRowCopy, action.payload]}
          
        case 'FIFTH_ROW_CHECK':
            return {...state, fifthRowCopy: [...state.fifthRowCopy, action.payload]}
    
        case 'SIXTH_ROW_CHECK':
            return {...state, sixthRowCopy: [...state.sixthRowCopy, action.payload]}
                    
        default:
            return state
    }
}