import { Reducer, combineReducers } from "redux";
import { ITodo } from "../entities/ITodo";
import todoListReducer from './TodoListReducer';
import filterReducer from "./FilterReducer";


export interface ITodoState {
    todos: ITodo[],
    visibilityFilter: string
}


export const todoAppReducer: Reducer<ITodoState> = combineReducers({
        todos: todoListReducer,
        visibilityFilter: filterReducer
    });
