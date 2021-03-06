import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import * as styles from "./css/styles.css";

library.add(faPlus);

interface IProps {
    onAddClick: Function;
}

export class AddTodo extends React.Component<IProps, any> {
    public render() {
        let input: any;
        return (
            <div className={styles.addTodo}>
                <input
                    className={styles.tInputText}
                    ref={(node) => {
                        input = node;
                    }}
                    data-test-id="add-todo-input"/>
                <button
                    className={styles.tInputSubmit}
                    type="submit" onClick={() => {
                        if (input.value) {
                            this.props.onAddClick(input.value);
                        }
                    }}
                    data-testid="add-todo-btn"
                >
                    <FontAwesomeIcon icon="plus"/>
                </button>
            </div>);
    }

    public shouldComponentUpdate() {
        return false;
    }
}
