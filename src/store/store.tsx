
import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import { todoAppReducer } from "../ducks/TodoAppReducer";
import todoAppEpic from "../epics";

const epicMiddleware = createEpicMiddleware();


let store = createStore(
    todoAppReducer,
    applyMiddleware(epicMiddleware),
);

epicMiddleware.run(todoAppEpic);

export default store;
