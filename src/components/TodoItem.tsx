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

export class TodoItem extends React.Component<any, any> {
    public shouldComponentUpdate(nextProps: IProps) {
        return this.props.completed !== nextProps.completed ||
            this.props.text !== nextProps.text;
    }

    public render() {
        let styleClasses = classNames.bind(styles);
        let textClassName: string = styles.item + (this.props.completed ? " " + styles.completed : "");
        if (this.props.completed) {
            return (
                <div className={textClassName} onClick={this.props.onItemClick}>
                    <span className={styles.iconBox}><FontAwesomeIcon icon="check-square"/></span>
                    {this.props.text}
                </div>);
        } else {
            return (<div className={textClassName} >
                <span className={styles.iconBox} onClick={this.props.onItemClick}>
                    <FontAwesomeIcon icon="square" />
                </span>
                {this.props.text}
                <span className={styles.iconTrash} onClick={this.props.onTrashClick}>
                    <FontAwesomeIcon icon="trash"/>
                </span>
            </div>);
        }
    }
}
