import * as React from 'react';
import { connect } from 'react-redux';

import { AddTodo } from "./AddTodo";
import { TodoList } from './TodoList';
import { ITodo } from "../entities/ITodo";
import { TodoActionTypes } from '../actions/TodoAction';
import { TodoState } from '../reducers/TodoReducer';
import * as styles from './css/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckSquare, faCheckCircle, faSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import {FilterNavigation} from "./FilterNavigation";

// import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';

let nextTodoId = 0;
library.add(faCheck);
library.add(faCheckCircle);
library.add(faCheckSquare);
library.add(faSquare);
library.add(faTrash);

const mapStateToProps = (state: TodoState) => state;

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (index: number, text: string) => {
        console.log('mapDispatchToProps: ', index, text);
        console.log('mapDispatchToProps: ', JSON.stringify({ type: TodoActionTypes.ADD_TODO, index: index, text: text }));
        dispatch({ type: TodoActionTypes.ADD_TODO, id: index, text: text });
    },
    removeTodo: (index: number) => {
        dispatch({type: TodoActionTypes.REMOVE_TODO, id: index});
    },
    toggleTodo: (index: number) => {
        dispatch({ type: TodoActionTypes.TOGGLE_TODO, id: index });
    },
    setVisibilityFilter: (filter: string) => {
        dispatch({ type: TodoActionTypes.SET_VISIBLITY_FILTER, filter: filter });
    }
});

const getVisibleTodos = (
    todos: Array<ITodo>,
    filter: string
) => {
    switch(filter) {
        case 'ALL':
            return todos;
        case 'COMPLETED':
            return todos.filter(t => t.completed);
        case 'ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

class TodoApp extends React.Component<any, any> {
    render() {
        const visibleTodos = getVisibleTodos(
            this.props.todos,
            this.props.visibilityFilter);
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
                        this.props.addTodo(nextTodoId++, text);}}
                    />
                    <TodoList
                        key="todoList"
                        todos={visibleTodos}
                        onTodoClick={(index: number) => { this.props.toggleTodo(index); }}
                        onTrashClick={(index: number) => { this.props.removeTodo(index); }}/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
