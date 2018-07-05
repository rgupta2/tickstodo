import * as React from 'react';
import * as styles from './css/styles.css';

// TODO: Figure out how to specify type for children
interface IProps {
    filter: string,
    currentFilter: string,
    onLinkClick: Function
}

export const FilterLink = (props: any) => {
    if (props.filter === props.currentFilter) {
        return (
            <a className={styles.filterNavItemLink + ' ' + styles.filterNavItemActive} href='#' onClick={e => {e.preventDefault(); props.onLinkClick(props.filter)}}>{props.children}</a>
        );
    }

    return (
        <a className={styles.filterNavItemLink} href='#' onClick={e => {e.preventDefault(); props.onLinkClick(props.filter)}}>{props.children}</a>
    );
};
