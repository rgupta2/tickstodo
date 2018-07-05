import * as React from 'react';
import * as styles from './css/styles.css';

interface IProps {
    onAddClick: Function
}

export const AddTodo = (props: IProps) => {
    let input: any;
    return (
        <div className={styles.addTodo}>
            <input className={ styles.tInputText } ref={ node => { input = node; } }/>
            <button className={ styles.tInputSubmit } type="submit" onClick={() => { input.value && props.onAddClick(input.value); } }>+</button>
        </div>);
};
