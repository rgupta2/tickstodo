
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import ITodo from "../entities/ITodo";

const actionCreator = actionCreatorFactory();

// Specify payload shape as generic type argument.
export const AddTodoAction = actionCreator.async<{text: string}, ITodo>("ADD_TODO");
export const RemoveTodoAction = actionCreator.async<{id: number}, {id: number}>("REMOVE_TODO");
export const ToggleTodoAction = actionCreator.async<{id: number}, ITodo>("TOGGLE_TODO");
export const FetchTodoAction = actionCreator.async<void, ITodo[]>("FETCH_TODO");


const INITIAL_STATE: ITodo[] = [];


const toggleIfIdMatches = (todo: ITodo, id: number) => {
    if (todo.id !== id) {
        return todo;
    }

    return {
        ...todo, completed: !todo.completed,
    };
};

export const todosReducer = reducerWithInitialState(INITIAL_STATE)
    .case(AddTodoAction.done,
        (state, payload) => (
            [...state,
                payload.result,
            ]
        ),
    )
    .case(RemoveTodoAction.done, (state, payload) => (state.filter((todo) => todo.id !== payload.result.id)))
    .case(ToggleTodoAction.done, (state, payload) => (state.map((todo) => toggleIfIdMatches(todo, payload.result.id))))
    .case(FetchTodoAction.done, (state, payload) => (payload.result));
