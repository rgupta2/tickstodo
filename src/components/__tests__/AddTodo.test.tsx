
import * as React from "react";
import * as renderer from "react-test-renderer";
import { AddTodo } from "../AddTodo";

import { fireEvent, render } from "react-testing-library";

it("renders correctly", () => {
    const tree = renderer.create(
        <AddTodo onAddClick={jest.fn}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


it("renders button", () => {
    const props = {
        onAddClick: jest.fn(),
    };
    const { getByTestId, queryByTestId, container } = render(<AddTodo onAddClick={props.onAddClick}/>);

    expect(queryByTestId("add-todo-input")).toBeNull();

    fireEvent.click(getByTestId("add-todo-btn"));
    expect(props.onAddClick).toHaveBeenCalledTimes(0);
});
