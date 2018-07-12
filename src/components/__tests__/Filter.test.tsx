
import * as React from "react";
import * as renderer from "react-test-renderer";
import { Filter } from "../Filter";

it("FilterNavigation renders correctly", () => {
    const filter = "X";
    const currentFilter = "Y";
    const tree = renderer.create(
        <Filter
            filter={filter}
            currentFilter={currentFilter}
            onLinkClick={jest.fn}>
            {filter}</Filter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
