// import { deepFreeze } from "deep-freeze"; // TODO: Deep freeze package not working in Typescript
import { ITodo } from "../entities/ITodo";
import { addTodo, removeTodo, toggleTodo, todosReducer } from "./todo";

describe("todosReducer should work", () => {
    it("should add a todo", () => {
        let initialState: ITodo[] = [];
        // let expectedState: ITodo[] = [{
        //     completed: false,
        //     id: 1, // explore if there is a notion of any instead of a fixed value
        //     text: "test",
        // }];
        // deepFreeze(initialState);
        // deepFreeze(expectedState);

        let outputState: ITodo[] = todosReducer(initialState, addTodo("test"));
        // create a payload
        expect(outputState[0].text).toEqual("test");
        expect(outputState[0].completed).toEqual(false);
    });
}
);
