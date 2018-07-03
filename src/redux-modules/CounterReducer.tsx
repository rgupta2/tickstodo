import { Reducer } from 'redux';
import { CounterAction, CounterActionTypes } from "./CounterAction";

export interface CounterState {
    list: Array<number>
}

export const reducer: Reducer<CounterState> = (state: CounterState = { list: [] }, action: CounterAction) => {
    // We'll augment the action type on the switch case to make sure we have
    // all the cases handled.
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return {...state, list: [
                ...state.list.slice(0, action.index),
                state.list[action.index]+1,
                ...state.list.slice(action.index + 1)
            ]};

        case CounterActionTypes.DECREMENT:
            return {...state, list: [
                ...state.list.slice(0, action.index),
                state.list[action.index] - 1,
                ...state.list.slice(action.index + 1)
            ]};

        case CounterActionTypes.ADD:
            return {...state, list: [...state.list, 0]};

        case CounterActionTypes.REMOVE:
            return {...state, list: [
                ...state.list.slice(0, action.index),
                ...state.list.slice(action.index + 1)
            ]};
        default:
            return state;
    }
};
