import * as React from "react";
import { ITodo } from "../entities/ITodo";
import * as styles from "./css/styles.css";
import { TodoItem } from "./TodoItem";

interface IProps {
    todos: ITodo[];
    onTodoClick: Function;
    onTrashClick: Function;
}

export class TodoList extends React.Component<any, any> {
    public shouldComponentUpdate(nextProps: IProps) {
        return this.props.todos !== nextProps.todos;
    }

    public render() {
        return (
            <div className={styles.reminders}>
                {this.props.todos.map((todo: ITodo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onItemClick={() => this.props.onTodoClick(todo.id)}
                            onTrashClick={() => this.props.onTrashClick(todo.id)}
                        />
                    );
                })}
            </div>
        );
    }
}
