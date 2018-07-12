// import { deepFreeze } from "deep-freeze"; // TODO: Deep freeze package not working in Typescript
import { setVisibilityFilter, visibilityFilterReducer } from "../filter";


describe("visibilityFilterReducer should work", () => {
    it("set initial filter", () => {
        let initialState: string = "";
        let expectedState: string = "ALL";

        let outputState: string = visibilityFilterReducer(initialState, setVisibilityFilter("ALL"));
        // create a payload
        expect(outputState).toEqual(expectedState);
    });

    it("switch a filter", () => {
        let initialState: string = "INITIAL";
        let expectedState: string = "ALL";

        let outputState: string = visibilityFilterReducer(initialState, setVisibilityFilter("ALL"));
        // create a payload
        expect(outputState).toEqual(expectedState);
    });
},
);
