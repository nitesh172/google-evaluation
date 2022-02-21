import { SEARCH_VALUE } from "./actionTypes"

export const searchValueADD = (data) => {
    return { type: SEARCH_VALUE, payload: data}
}