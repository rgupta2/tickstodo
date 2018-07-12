
import { createStore, applyMiddleware } from "redux";
import { todoAppReducer } from "../ducks/TodoAppReducer";
import thunk from 'redux-thunk';

let store = createStore(
    todoAppReducer,
    applyMiddleware(thunk)
);

export default store;
