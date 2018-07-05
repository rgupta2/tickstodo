import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shallow } from "enzyme";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import AddTodoForm from "../src/components/AddForm/AddTodoForm";
import { AddTodo } from "./AddTodo";

it("renders button", () => {
    const result = shallow(<AddTodo />)
        .contains(<FontAwesomeIcon icon="plus"/>);
    expect(result).toBeTruthy();
});
