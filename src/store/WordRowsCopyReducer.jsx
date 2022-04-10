const defaultState = {
    firstRowCopy: [],
    secondRowCopy: [],
    thirdRowCopy: [],
}

export const WordRowsCopyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FIRST_ROW_CHECK':
            return {...state, firstRowCopy: [...state.firstRowCopy, action.payload]}
          
        case 'SECOND_ROW_CHECK':
            return {...state, secondRowCopy: [...state.secondRowCopy, action.payload]}
    
        case 'THIRD_ROW_CHECK':
            return {...state, thirdRowCopy: [...state.thirdRowCopy, action.payload]}
                    
        default:
            return state
    }
}