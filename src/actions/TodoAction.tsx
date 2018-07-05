
export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    SET_VISIBLITY_FILTER = 'SET_VISIBLITY_FILTER'
}

export interface AddTodoAction { type: TodoActionTypes.ADD_TODO, id: number, text: string }
export interface ToggleTodoAction { type: TodoActionTypes.TOGGLE_TODO, id: number }
export interface SetVisibilityFilterAction { type: TodoActionTypes.SET_VISIBLITY_FILTER, filter: string }

export type TodoAction = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction ;
