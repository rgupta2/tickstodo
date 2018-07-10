import { Reducer, Action } from "redux";
import { isType } from "typescript-fsa";
import { ISetVisibilityFilterAction } from "../actions/TodoAction";


const filterReducer: Reducer<string> = (state: string = '' , action: Action) => {
    if (isType(action, ISetVisibilityFilterAction)) {
        return action.payload.filter;
    }
        return state;
};

export default filterReducer;