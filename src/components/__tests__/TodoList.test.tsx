
import * as React from "react";
import * as renderer from "react-test-renderer";
import ITodo from "../../entities/ITodo";
import { TodoList } from "../TodoList";

it("renders correctly", () => {
    let todo: ITodo = {
        completed: false,
        id: 1,
        text: "some todo",
    };
    const tree = renderer.create(
        <TodoList todos={[todo]} onTodoClick={jest.fn} onTrashClick={jest.fn}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
