// import { deepFreeze } from "deep-freeze"; // TODO: Deep freeze package not working in Typescript
import ITodo from "../entities/ITodo";
import { AddTodoAction, FetchTodoAction, RemoveTodoAction, todosReducer, ToggleTodoAction } from "./todo";


describe("todoListReducer should work", () => {
    it("should fetch todos", () => {
        let initialState: ITodo[] = [];
        let expectedState: ITodo[] = [{
            completed: false,
            id: 1,
            text: "test",
        }];
        let result = [{
            completed: false,
            id: 1,
            text: "test",
        }];
        // deepFreeze(initialState);
        // deepFreeze(expectedState);

        let outputState: ITodo[] = todosReducer(initialState, FetchTodoAction.done({result}));
        expect(outputState).toEqual(expectedState);
    });
    it("should add a todo", () => {
        let initialState: ITodo[] = [];
        let expectedState: ITodo[] = [{
            completed: false,
            id: 1,
            text: "test",
        }];
        let params = {
            text: "test",
        };
        let result = {
            completed: false,
            id: 1,
            text: "test",
        };
        // deepFreeze(initialState);
        // deepFreeze(expectedState);

        let outputState: ITodo[] = todosReducer(initialState, AddTodoAction.done({params, result}));
        expect(outputState).toEqual(expectedState);
    });
    it("should remove todo", () => {
        let initialState: ITodo[] = [{
            completed: false,
            id: 1,
            text: "test 1",
        }, {
            completed: false,
            id: 2,
            text: "test 2",
        }];

        let expectedState: ITodo[] = [{
            completed: false,
            id: 2,
            text: "test 2",
        }];

        let params = {
            id: 1,
        };
        let result = {
            id: 1,
        };

        let outputState: ITodo[] = todosReducer(initialState, RemoveTodoAction.done({params, result}));
        expect(outputState).toEqual(expectedState);
    });
    it("should toggle todo", () => {
        let initialState: ITodo[] = [{
            completed: false,
            id: 1,
            text: "test 1",
        }, {
            completed: false,
            id: 2,
            text: "test 2",
        }];
        let expectedState: ITodo[] = [{
            completed: true,
            id: 1,
            text: "test 1",
        }, {
            completed: false,
            id: 2,
            text: "test 2",
        }];

        let params = {
            id: 1,
        };
        let result = {
            completed: true,
            id: 1,
            text: "test 1",
        };

        let outputState: ITodo[] = todosReducer(initialState, ToggleTodoAction.done({params, result}));
        // create a payload
        expect(outputState).toEqual(expectedState);
    });
});
