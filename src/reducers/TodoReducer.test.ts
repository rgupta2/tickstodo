import { deepFreeze } from "deep-freeze";
import { TodoAction, TodoActionTypes } from "../actions/TodoAction";
import { ITodo } from "../entities/ITodo";
import { ITodoState, reducer } from "./TodoReducer";

test("basic test", () => {
    let initialState: ITodoState = {
        todos: [],
        visibilityFilter: "",
    };
    let expectedState: ITodoState = {
        todos: [{
            completed: false,
            id: 1,
            text: "test",
        }],
        visibilityFilter: "",
    };
    deepFreeze(initialState);
    deepFreeze(expectedState);

    let action: TodoAction = {
        id: 1,
        text: "test",
        type: TodoActionTypes.ADD_TODO,
    };

    let outputState: ITodoState = reducer(initialState, action);
    // create a payload
    expect(outputState).toEqual(expectedState);
});
