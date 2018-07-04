import * as React from 'react';

interface IProps {
    id: number,
    completed: boolean,
    text: string,
    onItemClick: Function
}

export const TodoItem = (props: IProps) => {
    return (
        <li
            onClick={() => props.onItemClick()}
            style={{
                textDecoration: props.completed? 'line-through': 'none'
            }}
        >
            {props.text}
        </li>);
};
