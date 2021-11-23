import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer"

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: notificationReducer
})
export const store = createStore(reducer, composeWithDevTools())
console.log(store.getState())