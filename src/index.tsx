import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';
import { reducer } from './redux-modules/TodoReducer'

let store = createStore(reducer, {todos: [], visibilityFilter: ''});

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root'),
);