import { Reducer } from 'redux';
import { TodoAction, TodoActionTypes } from "./TodoAction";
import { ITodo } from "../entities/ITodo";

export interface TodoState {
    todos: Array<ITodo>,
    visibilityFilter: string
}

export const reducer: Reducer<TodoState> = (state: TodoState , action: TodoAction) => {
    console.log('Reducer: ', JSON.stringify(action));
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {...state,
                todos: [...state.todos, {
                id: action.id,
                text: action.text,
                completed: false
            }]};

        case TodoActionTypes.TOGGLE_TODO:
            return {...state,
                todos: state.todos.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo, completed: !todo.completed
                };
            })};

        case TodoActionTypes.SET_VISIBLITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter
            };

        default:
            return state;
    }
};
