// import { deepFreeze } from "deep-freeze"; // TODO: Deep freeze package not working in Typescript
import { TodoAction, TodoActionTypes } from "../actions/TodoAction";
import { ITodo } from "../entities/ITodo";
import todoListReducer from "./TodoListReducer";


test("basic test", () => {
    let initialState: ITodo[] = [];
    let expectedState: ITodo[] = [{
            completed: false,
            id: 1,
            text: "test",
        }];
    // deepFreeze(initialState);
    // deepFreeze(expectedState);

    let action: TodoAction = {
        id: 1,
        text: "test",
        type: TodoActionTypes.ADD_TODO,
    };

    let outputState: ITodo[] = todoListReducer(initialState, action);
    // create a payload
    expect(outputState).toEqual(expectedState);
});
