
import * as React from "react";
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

// Specify payload shape as generic type argument.
const IAddTodoAction = actionCreator<{id: number, text: string}>('ADD_TODO');

const IRemoveTodoAction = actionCreator<{id: number}>('REMOVE_TODO');

const IToggleTodoAction = actionCreator<{id: number}>('TOGGLE_TODO');

const ISetVisibilityFilterAction = actionCreator<{filter: string}>('SET_VISIBLITY_FILTER');


let nextTodoId = 0;

const addTodo = (text: string) => {
    return {
        payload: {
            id: nextTodoId++,
            text,
        },
        type: 'ADD_TODO',
    };
};

const removeTodo = (index: number) => {
    return {
        payload: {
            id: index,
        },
        type: 'REMOVE_TODO',
    };
};

const setVisibilityFilter = (filter: string) => {
    return {
        payload: {
            filter,
        },
        type: 'SET_VISIBLITY_FILTER',
    };
};

const toggleTodo = (index: number) => {
    return {
        type: 'TOGGLE_TODO',
        payload: {
            id: index,
        },
    };
};


export { IAddTodoAction, IRemoveTodoAction, IToggleTodoAction, ISetVisibilityFilterAction, addTodo, removeTodo, setVisibilityFilter, toggleTodo };