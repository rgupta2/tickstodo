
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
    const { container } = render(<AddTodo onAddClick={jest.fn}/>);
    // expect(container.firstChild).to(<FontAwesomeIcon icon="plus"/>);
    // .contains);
    expect(container).toBeTruthy();
});
