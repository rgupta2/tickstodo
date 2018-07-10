import * as React from "react";
import { connect } from "react-redux";

import { TodoActionTypes } from "../actions/TodoAction";
import { ITodo } from "../entities/ITodo";
import { ITodoState } from "../reducers/TodoAppReducer";
import { AddTodo } from "./AddTodo";
import * as styles from "./css/styles.css";
import { TodoList } from "./TodoList";

import {FilterNavigation} from "./FilterNavigation";

let nextTodoId = 0;


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
    const props = {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
    return props;
};

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (index: number, text: string) => {
        dispatch({
            id: index,
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },
    removeTodo: (index: number) => {
        dispatch({
            id: index,
            type: TodoActionTypes.REMOVE_TODO,
        });
    },
    setVisibilityFilter: (filter: string) => {
        dispatch({
            filter,
            type: TodoActionTypes.SET_VISIBLITY_FILTER,
        });
    },
    toggleTodo: (index: number) => {
        dispatch({ type: TodoActionTypes.TOGGLE_TODO, id: index });
    },
});


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
                        this.props.addTodo(nextTodoId++, text); }}
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
