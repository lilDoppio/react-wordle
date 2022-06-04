const defaultState = {
    instruction: 1,
    information: 1,
}

export const PopupWindowsReducer = (state = defaultState, action) => {
    switch (action.type) {
        
        case 'OPEN_INSTRUCTION':
            return { ...state, instruction: action.pyload}

        case 'CLOSE_INSTRUCTION':
            return { ...state, instruction: action.pyload}

        case 'OPEN_INFORMATION':
            return { ...state, information: action.pyload}

        case 'CLOSE_INFORMATION':
            return { ...state, information: action.pyload}

        default:
            return state
    }
}