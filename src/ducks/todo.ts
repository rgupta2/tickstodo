
import actionCreatorFactory from 'typescript-fsa';
import { ITodo } from "../entities/ITodo";
import { reducerWithInitialState } from "typescript-fsa-reducers";


const actionCreator = actionCreatorFactory();

// Specify payload shape as generic type argument.
export const AddTodoAction = actionCreator<{text: string}>('ADD_TODO');
export const RemoveTodoAction = actionCreator<{id: number}>('REMOVE_TODO');
export const ToggleTodoAction = actionCreator<{id: number}>('TOGGLE_TODO');

export const addTodo = (text: string) => {
    return {
        payload: {
            text,
        },
        type: 'ADD_TODO',
    };
};

export const removeTodo = (index: number) => {
    return {
        payload: {
            id: index,
        },
        type: 'REMOVE_TODO',
    };
};

export const toggleTodo = (index: number) => {
    return {
        type: 'TOGGLE_TODO',
        payload: {
            id: index,
        },
    };
};

const INITIAL_STATE: ITodo[] = [];

let nextTodoId = 0;

const toggleTodoIfIdMatches = (todo: ITodo, id: number) => {
    if (todo.id !== id) {
        return todo;
    }

    return {
        ...todo, completed: !todo.completed,
    };
};

export const todosReducer = reducerWithInitialState(INITIAL_STATE)
    .case(AddTodoAction, (state, payload) => ([...state, {id: nextTodoId++, completed: false, text: payload.text}]))
    .case(RemoveTodoAction, (state, payload) => (state.filter((todo) => todo.id !== payload.id)))
    .case(ToggleTodoAction, (state, payload) => (state.map((todo) => toggleTodoIfIdMatches(todo, payload.id))));
