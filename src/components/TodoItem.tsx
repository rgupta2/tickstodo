import * as classNames from "classnames";
import * as React from "react";
import * as styles from "./css/styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheckSquare);
library.add(faSquare);
library.add(faTrash);

interface IProps {
    id: number;
    completed: boolean;
    text: string;
    onItemClick(): void;
    onTrashClick(): void;
}

export const TodoItem = (props: IProps) => {
    let styleClasses = classNames.bind(styles);
    let textClassName: string = styles.item + (props.completed ? " " + styles.completed : "");
    if (props.completed) {
        return (
            <div className={textClassName} onClick={props.onItemClick}>
                <span className={styles.iconBox}><FontAwesomeIcon icon="check-square"/></span>
                {props.text}
            </div>);
    } else {
        return (<div className={textClassName} onClick={props.onItemClick}>
            <span className={styles.iconBox}><FontAwesomeIcon icon="square"/></span>
            {props.text}
            <span className={styles.iconTrash} onClick={props.onTrashClick}>
                <FontAwesomeIcon icon="trash"/>
            </span>
        </div>);
    }
};
