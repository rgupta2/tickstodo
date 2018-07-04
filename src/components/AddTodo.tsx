import * as React from 'react';

interface IProps {
    onAddClick: Function
}

export const AddTodo = (props: IProps) => {
    let input: any;
    return (
        <div key='addTodo'>
            <input ref={ node => { input = node; } } />
            <button onClick={() => { props.onAddClick(input.value); } }>Add Todo</button>
        </div>);
};
