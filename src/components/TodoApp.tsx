import * as React from "react";
import { connect } from "react-redux";

import { setVisibilityFilter } from "../ducks/filter";
import { AddTodoAction, FetchTodoAction, RemoveTodoAction, ToggleTodoAction } from "../ducks/todo";
import { ITodoState } from "../ducks/TodoAppReducer";
import ITodo from "../entities/ITodo";
import { AddTodo } from "./AddTodo";
import * as styles from "./css/styles.css";
import { TodoList } from "./TodoList";

import {FilterNavigation} from "./FilterNavigation";


const getVisibleTodos = (
    todos: ITodo[],
    filter: string,
) => {
    switch (filter) {
        case "ALL":
            return todos;
        case "COMPLETED":
            return todos.filter((t) => t.completed);
        case "ACTIVE":
            return todos.filter((t) => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state: ITodoState) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
    };
};

const mapDispatchToProps = {
    addTodo: AddTodoAction.started,
    loadTodo: FetchTodoAction.started,
    removeTodo: RemoveTodoAction.started,
    setVisibilityFilter,
    toggleTodo: ToggleTodoAction.started,
};


class TodoApp extends React.Component<any, any> {
    public componentDidMount() {
        this.props.loadTodo();
    }

    public render() {
        return (
            <div>
                <div className={styles.pageHeader}>
                    <div className={styles.filterNavItem}>
                        TICKS TO DO
                    </div>
                    <FilterNavigation
                        visibilityFilter={this.props.visibilityFilter}
                        onFilterClick={(filter: string) => {this.props.setVisibilityFilter(filter); }}
                    />
                </div>
                <div className={styles.reminderContainer}>
                    <AddTodo
                        onAddClick={(text: string) => {
                        this.props.addTodo({text}); }}
                    />
                    <TodoList
                        todos={this.props.todos}
                        onTodoClick={(id: number) => { this.props.toggleTodo({id}); }}
                        onTrashClick={(id: number) => { this.props.removeTodo({id}); }}/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
