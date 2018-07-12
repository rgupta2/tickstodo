
import * as React from "react";
import * as renderer from "react-test-renderer";
import ITodo from "../../entities/ITodo";
import { TodoItem } from "../TodoItem";

it("TodoItem renders correctly", () => {
    let todo: ITodo = {
        completed: false,
        id: 1,
        text: "some todo",
    };
    const tree = renderer.create(
        <TodoItem
            completed={todo.completed}
            id={todo.id}
            text={todo.text}
            onItemClick={jest.fn}
            onTrashClick={jest.fn}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
