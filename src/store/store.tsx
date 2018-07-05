
import { createStore } from "redux";
import { reducer } from "../reducers/TodoReducer";

let store = createStore(
    reducer,
    {todos: [], visibilityFilter: ""},
);

export default store;
