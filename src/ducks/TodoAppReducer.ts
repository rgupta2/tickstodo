import { Reducer, combineReducers } from "redux";
import { ITodo } from "../entities/ITodo";
import { todosReducer } from './Todo';
import { visibilityFilterReducer } from "./filter";


export interface ITodoState {
    todos: ITodo[],
    visibilityFilter: string
}


export const todoAppReducer: Reducer<ITodoState> = combineReducers({
        todos: todosReducer,
        visibilityFilter: visibilityFilterReducer
    });
