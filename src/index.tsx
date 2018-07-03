import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterList from './components/CounterList';
import { reducer } from './components/CounterReducer'

let store = createStore(reducer, { list: [0] });

ReactDOM.render(
    <Provider store={store}>
        <CounterList />
    </Provider>,
    document.getElementById('root'),
);