import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import * as styles from "./css/styles.css";

library.add(faPlus);

interface IProps {
    onAddClick: Function;
}

export const AddTodo = (props: IProps) => {
    let input: any;
    return (
        <div className={styles.addTodo}>
            <input
                className={ styles.tInputText }
                ref={ (node) => { input = node; } }/>
            <button
                className={ styles.tInputSubmit }
                type="submit" onClick={() => {
                    if (input.value) {
                        props.onAddClick(input.value);
                    }
                }
                }>
                <FontAwesomeIcon icon="plus" />
            </button>
        </div>);
};
