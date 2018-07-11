import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from "typescript-fsa-reducers";

const actionCreator = actionCreatorFactory();

// Specify payload shape as generic type argument.
export const ISetVisibilityFilterAction = actionCreator<{filter: string}>("SET_VISIBLITY_FILTER");

export const setVisibilityFilter = (filter: string) => {
    return {
        payload: {
            filter,
        },
        type: "SET_VISIBLITY_FILTER",
    };
};

const INITIAL_STATE: string = "";

export const visibilityFilterReducer = reducerWithInitialState(INITIAL_STATE)
    .case(ISetVisibilityFilterAction, (state, payload) => (payload.filter));