import { createStore } from "redux";
import { WordRowsReducer } from "./WordRowsReducer";
import { combineReducers } from "redux";
import { CurrentWordReducer } from '../store/CurrentWordReducer'
import { WordRowsCopyReducer } from "./WordRowsCopyReducer";

const rootReducer = combineReducers({
    wordRows: WordRowsReducer,
    wordRowsCopy: WordRowsCopyReducer, 
    currentWord: CurrentWordReducer,
})

export const store = createStore(rootReducer)
