import { createStore, combineReducers } from "redux"
import { searchValueReducer } from "./reducer"

const rootReducer = combineReducers({
  searchValue: searchValueReducer,
})

export const store = createStore(rootReducer)
