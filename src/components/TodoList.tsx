import * as React from 'react';
import { TodoItem } from './TodoItem';
import { ITodo } from '../entities/ITodo';
import * as styles from './css/styles.css';

interface IProps {
    todos: Array<ITodo>,
    onTodoClick: Function
}

export const TodoList = (props: IProps) => {
    return (
        <div className={styles.reminders}>
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
        </div>
    );
};
