import { SEARCH_VALUE } from "./actionTypes"

export const searchValueReducer = (state = { searchValue: "" }, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return { ...state, searchValue: action.payload }
    default:
      return { ...state }
  }
}
