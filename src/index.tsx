import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import store from "./store/store";

ReactDOM.render(
    <Provider key="provider" store={store}>
        <TodoApp key="todoapp" />
    </Provider>,
    document.getElementById("root"),
);
