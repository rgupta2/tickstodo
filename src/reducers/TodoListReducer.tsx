import { Reducer, Action } from "redux";
import { IAddTodoAction, IRemoveTodoAction, IToggleTodoAction } from "../actions/TodoAction";
import { ITodo } from "../entities/ITodo";
import { isType } from "typescript-fsa";


const todoListReducer: Reducer<ITodo[]> = (todos: ITodo[] = [] , action: Action) => {
    console.log('==============', action);
    if (isType(action, IAddTodoAction)) {
        return [...todos, {
            completed: false,
            id: action.payload.id,
            text: action.payload.text,
        }];
    } else if (isType(action, IRemoveTodoAction)) {
        return todos.filter((todo) => todo.id !== action.payload.id);
    } else if (isType(action, IToggleTodoAction)) {
        return todos.map((todo) => {
            if (todo.id !== action.payload.id) {
                return todo;
            }

            return {
                ...todo, completed: !todo.completed,
            };
        });
    } else {
        return todos;
    }
};

export default todoListReducer;