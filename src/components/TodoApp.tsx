import * as React from 'react';
import { connect } from 'react-redux';

import { AddTodo } from "./AddTodo";
import { TodoList } from './TodoList';
import { Footer } from './Footer';
import { ITodo } from "../entities/ITodo";
import { TodoActionTypes } from '../redux-modules/TodoAction';
import { TodoState } from '../redux-modules/TodoReducer';

let nextTodoId = 0;

const mapStateToProps = (state: TodoState) => state;

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (index: number, text: string) => {
        console.log('mapDispatchToProps: ', index, text);
        console.log('mapDispatchToProps: ', JSON.stringify({ type: TodoActionTypes.ADD_TODO, index: index, text: text }));
        dispatch({ type: TodoActionTypes.ADD_TODO, id: index, text: text });
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
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
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
                <AddTodo onAddClick={(text: string) => {
                    this.props.addTodo(nextTodoId++, text);
                }}/>

            <TodoList todos={visibleTodos} onTodoClick={(index: number) => {
                console.log('onTodoClick', index); this.props.toggleTodo(index); }} />

            <Footer visibilityFilter={this.props.visibilityFilter} onFilterClick={(filter: string) => {this.props.setVisibilityFilter(filter); }} />
    </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
