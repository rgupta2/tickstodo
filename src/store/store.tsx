
import { createStore } from "redux";
import { todoAppReducer } from "../ducks/TodoAppReducer";

let store = createStore(
    todoAppReducer,
);

export default store;
