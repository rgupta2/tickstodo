// // import { deepFreeze } from "deep-freeze"; // TODO: Deep freeze package not working in Typescript
// import { TodoAction, TodoActionTypes } from "../actions/TodoAction";
// import { ITodo } from "../entities/ITodo";
// import todoListReducer from "./TodoListReducer";
// import { Action } from 'redux';
// import filterReducer from "./FilterReducer";
//
//
// describe("todoListReducer should work", () => {
//     it("should add a todo", () => {
//         let initialState: ITodo[] = [];
//         let expectedState: ITodo[] = [{
//             completed: false,
//             id: 1,
//             text: "test",
//         }];
//         // deepFreeze(initialState);
//         // deepFreeze(expectedState);
//
//         let action: Action = {
//             id: 1,
//             text: "test",
//             type: TodoActionTypes.ADD_TODO,
//         };
//
//         let outputState: ITodo[] = todoListReducer(initialState, action);
//         // create a payload
//         expect(outputState).toEqual(expectedState);
//     });
//
//     it("should remove todo", () => {
//         let initialState: ITodo[] = [{
//             completed: false,
//             id: 0,
//             text: "test 0",
//         }, {
//             completed: false,
//             id: 2,
//             text: "test 2",
//         }, {
//             completed: false,
//             id: 1,
//             text: "test 1",
//         }];
//         let expectedState: ITodo[] = [{
//             completed: false,
//             id: 0,
//             text: "test 0",
//         }, {
//             completed: false,
//             id: 1,
//             text: "test 1",
//         }];
//         let action: TodoAction = {
//             id: 2,
//             type: TodoActionTypes.REMOVE_TODO,
//         };
//
//         let outputState: ITodo[] = todoListReducer(initialState, action);
//         // create a payload
//         expect(outputState).toEqual(expectedState);
//     });
//
//     it("should remove todo", () => {
//         let initialState: ITodo[] = [{
//             completed: false,
//             id: 0,
//             text: "test 0",
//         }, {
//             completed: false,
//             id: 2,
//             text: "test 2",
//         }, {
//             completed: false,
//             id: 1,
//             text: "test 1",
//         }];
//         let expectedState: ITodo[] = [{
//             completed: false,
//             id: 0,
//             text: "test 0",
//         }, {
//             completed: true,
//             id: 2,
//             text: "test 2",
//         }, {
//             completed: false,
//             id: 1,
//             text: "test 1",
//         }];
//         let action: TodoAction = {
//             id: 2,
//             type: TodoActionTypes.TOGGLE_TODO,
//         };
//
//         let outputState: ITodo[] = todoListReducer(initialState, action);
//         // create a payload
//         expect(outputState).toEqual(expectedState);
//     });
//
//     it("unchanged state on undefined action", () => {
//         let initialState: ITodo[] = [{
//             completed: false,
//             id: 0,
//             text: "test 0",
//         }, {
//             completed: false,
//             id: 1,
//             text: "test 1",
//         }];
//         let expectedState: ITodo[] = [{
//             completed: false,
//             id: 0,
//             text: "test 0",
//         }, {
//             completed: false,
//             id: 1,
//             text: "test 1",
//         }];
//
//         let action: TodoAction = {
//             id: 2,
//             type: undefined,
//         };
//
//         let outputState: ITodo[] = todoListReducer(initialState, action);
//         // create a payload
//         expect(outputState).toEqual(expectedState);
//     });
// }
// );
