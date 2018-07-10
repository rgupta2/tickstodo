import * as React from "react";

import { TodoActionTypes } from "./TodoAction";

let nextTodoId = 0;

const addTodo = (text: string) => {
    return {
        id: nextTodoId++,
        type: TodoActionTypes.ADD_TODO,
        text
    };
};

const removeTodo = (index: number) => {
    return {
        id: index,
        type: TodoActionTypes.REMOVE_TODO,
    };
};

const setVisibilityFilter = (filter: string) => {
    return {
       filter,
        type: TodoActionTypes.SET_VISIBLITY_FILTER
    };
};

const toggleTodo = (index: number) => {
    return { type: TodoActionTypes.TOGGLE_TODO, id: index };
};

export { addTodo, removeTodo, setVisibilityFilter, toggleTodo };