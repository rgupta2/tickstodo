import { combineReducers, Reducer } from "redux";
import ITodo from "../entities/ITodo";
import { visibilityFilterReducer } from "./filter";
import { todosReducer } from "./todo";


export interface ITodoState {
    todos: ITodo[];
    visibilityFilter: string;
}


export const todoAppReducer: Reducer<ITodoState> = combineReducers({
        todos: todosReducer,
        visibilityFilter: visibilityFilterReducer,
    });
