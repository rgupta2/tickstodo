import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';
import { reducer } from './reducers/TodoReducer'

let store = createStore(
    reducer,
    {todos: [], visibilityFilter: ''}
);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp key="todoapp" />
    </Provider>,
    document.getElementById('root'),
);