import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shallow } from "enzyme";
import * as React from "react";
import { AddTodo } from "./AddTodo";

it("renders button", () => {
    const result = shallow(<AddTodo />)
        .contains(<FontAwesomeIcon icon="plus"/>);
    expect(result).toBeTruthy();
});
