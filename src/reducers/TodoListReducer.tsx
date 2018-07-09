import { Reducer } from "redux";
import { TodoAction, TodoActionTypes } from "../actions/TodoAction";
import { ITodo } from "../entities/ITodo";


const todoListReducer: Reducer<ITodo[]> = (todos: ITodo[] , action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return [...todos, {
                completed: false,
                id: action.id,
                text: action.text,
            }];

        case TodoActionTypes.REMOVE_TODO:
            return todos.filter((todo) => todo.id !== action.id);

        case TodoActionTypes.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo, completed: !todo.completed,
                };
            });

        default:
            return todos;
    }
};

export default todoListReducer;