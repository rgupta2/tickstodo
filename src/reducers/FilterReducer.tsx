import { Reducer } from "redux";
import { TodoAction, TodoActionTypes } from "../actions/TodoAction";


export const filterReducer: Reducer<string> = (state: string , action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.SET_VISIBLITY_FILTER:
            return action.filter;

        default:
            return state;
    }
};
