import { peopleReducer } from "./reducer/peopleReducer";
import { createStore } from "redux"

export const store = createStore(peopleReducer)