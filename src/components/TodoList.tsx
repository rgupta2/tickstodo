import * as React from "react";
import { ITodo } from "../entities/ITodo";
import * as styles from "./css/styles.css";
import { TodoItem } from "./TodoItem";

interface IProps {
    todos: ITodo[];
    onTodoClick: Function;
    onTrashClick: Function;
}

export const TodoList = (props: IProps) => {
    return (
        <div className={styles.reminders}>
            {props.todos.map((todo: ITodo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onItemClick={() => props.onTodoClick(todo.id)}
                        onTrashClick={() => props.onTrashClick(todo.id)}
                    />
                );
            })}
        </div>
    );
};
