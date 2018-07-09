
import { createStore } from "redux";
import { todoAppReducer } from "../reducers/TodoAppReducer";

let store = createStore(
    todoAppReducer
);

export default store;
