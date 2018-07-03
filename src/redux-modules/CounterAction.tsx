
export enum CounterActionTypes {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    ADD = 'add',
    REMOVE = 'remove'
}

export interface IncAction { type: CounterActionTypes.INCREMENT, index: number }
export interface DecAction { type: CounterActionTypes.DECREMENT, index: number }
export interface AddAction { type: CounterActionTypes.ADD }
export interface RemoveAction { type: CounterActionTypes.REMOVE, index: number }

export type CounterAction = IncAction | DecAction | AddAction | RemoveAction;