// import { deepFreeze } from "deep-freeze"; // TODO: Deep freeze package not working in Typescript
import { TodoAction, TodoActionTypes } from "../actions/TodoAction";
import { ITodo } from "../entities/ITodo";
import filterReducer from "./FilterReducer";


describe("filterReducer should work", () => {
    it("set initial filter", () => {
        let initialState: string = '';
        let expectedState: string = 'ALL';

        let action: TodoAction = {
            filter: 'ALL',
            type: TodoActionTypes.SET_VISIBLITY_FILTER,
        };

        let outputState: string = filterReducer(initialState, action);
        // create a payload
        expect(outputState).toEqual(expectedState);
    });

    it("switch a filter", () => {
        let initialState: string = 'ALL';
        let expectedState: string = 'INITIAL';

        let action: TodoAction = {
            filter: 'INITIAL',
            type: TodoActionTypes.SET_VISIBLITY_FILTER,
        };

        let outputState: string = filterReducer(initialState, action);
        // create a payload
        expect(outputState).toEqual(expectedState);
    });

    it("unchanged state on undefined action", () => {
        let initialState: string = 'ALL';
        let expectedState: string = 'ALL';

        let action: TodoAction = {
            filter: 'INITIAL',
            type: undefined,
        };

        let outputState: string = filterReducer(initialState, action);
        // create a payload
        expect(outputState).toEqual(expectedState);
    });
}
);
