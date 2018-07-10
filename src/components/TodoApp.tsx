import * as React from "react";
import { connect } from "react-redux";

import { ITodo } from "../entities/ITodo";
import { ITodoState } from "../reducers/TodoAppReducer";
import { AddTodo } from "./AddTodo";
import * as styles from "./css/styles.css";
import { TodoList } from "./TodoList";
import { addTodo, toggleTodo, setVisibilityFilter, removeTodo } from "../actions/ActionCreators";

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
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = {
    addTodo, toggleTodo, setVisibilityFilter, removeTodo
};


class TodoApp extends React.Component<any, any> {
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
                        key="addTodo"
                        onAddClick={(text: string) => {
                        this.props.addTodo(text); }}
                    />
                    <TodoList
                        key="todoList"
                        todos={this.props.todos}
                        onTodoClick={(index: number) => { this.props.toggleTodo(index); }}
                        onTrashClick={(index: number) => { this.props.removeTodo(index); }}/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
