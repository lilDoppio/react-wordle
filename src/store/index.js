import { createStore } from "redux";
import { WordRowsReducer } from "./WordRowsReducer";
import { combineReducers } from "redux";
import { CurrentWordReducer } from '../store/CurrentWordReducer'
import { WordRowsCopyReducer } from "./WordRowsCopyReducer";
import { PopupWindowsReducer } from "../store/PopupWindowsReducer"

const rootReducer = combineReducers({
    wordRows: WordRowsReducer,
    wordRowsCopy: WordRowsCopyReducer, 
    currentWord: CurrentWordReducer,
    popup: PopupWindowsReducer,
})

export const store = createStore(rootReducer)
