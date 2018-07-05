
export enum TodoActionTypes {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_VISIBLITY_FILTER = "SET_VISIBLITY_FILTER",
}

export interface IAddTodoAction {
    type: TodoActionTypes.ADD_TODO;
    id: number;
    text: string;
}

export interface IRemoveTodoAction {
    type: TodoActionTypes.REMOVE_TODO;
    id: number;
}

export interface IToggleTodoAction {
    type: TodoActionTypes.TOGGLE_TODO;
    id: number;
}

export interface ISetVisibilityFilterAction {
    type: TodoActionTypes.SET_VISIBLITY_FILTER;
    filter: string;
}

export type TodoAction = IAddTodoAction | IRemoveTodoAction | IToggleTodoAction | ISetVisibilityFilterAction ;
