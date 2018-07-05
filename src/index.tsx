import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoApp from "./components/TodoApp";

ReactDOM.render(
    <Provider store={store}>
        <TodoApp key="todoapp" />
    </Provider>,
    document.getElementById("root"),
);
