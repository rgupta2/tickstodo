import { Reducer } from "redux";
import { TodoAction, TodoActionTypes } from "../actions/TodoAction";
import { ITodo } from "../entities/ITodo";

export interface ITodoState {
    todos: ITodo[];
    visibilityFilter: string;
}

export const reducer: Reducer<ITodoState> = (state: ITodoState , action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {...state,
                todos: [...state.todos, {
                    completed: false,
                    id: action.id,
                    text: action.text,
            }]};

        case TodoActionTypes.REMOVE_TODO:
            return { ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id)};

        case TodoActionTypes.TOGGLE_TODO:
            return {...state,
                todos: state.todos.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo, completed: !todo.completed,
                };
            })};

        case TodoActionTypes.SET_VISIBLITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter,
            };

        default:
            return state;
    }
};
