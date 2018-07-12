import { combineEpics } from "redux-observable";

import { AddTodoEpic, FetchTodoEpic, RemoveTodoEpic, ToggleTodoEpic } from "./todo";

const todoAppEpic = combineEpics(
    AddTodoEpic, FetchTodoEpic, ToggleTodoEpic, RemoveTodoEpic,
);

export default todoAppEpic;
