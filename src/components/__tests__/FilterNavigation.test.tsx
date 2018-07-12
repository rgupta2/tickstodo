
import * as React from "react";
import * as renderer from "react-test-renderer";
import { FilterNavigation } from "../FilterNavigation";

it("FilterNavigation renders correctly", () => {
    const tree = renderer.create(
        <FilterNavigation visibilityFilter="" onFilterClick={jest.fn}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
