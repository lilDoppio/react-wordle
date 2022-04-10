const defaultState = {
    firstRowCopy: [],
    secondRowCopy: [],
    thirdRowCopy: [],
}

export const WordRowsCopyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CREATE_CHECK_WORD':
            return {...state, firstRowCopy: [...state.firstRowCopy, action.payload]}
        
        default:
            return state
    }
}