import * as React from 'react';
import { TodoItem } from './TodoItem';
import { ITodo } from '../entities/ITodo';

interface IProps {
    todos: Array<ITodo>,
    onTodoClick: Function
}

export const TodoList = (props: IProps) => {
    return (
        <ul>
            {props.todos.map((todo: ITodo) => {
                console.log('TodoList.props', props);
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onItemClick={ () => props.onTodoClick(todo.id) }
                    />
                )
            })}
        </ul>
    );
};
