import * as React from 'react';

// TODO: Figure out how to specify type for children
interface IProps {
    filter: string,
    currentFilter: string,
    onLinkClick: Function
}

export const FilterLink = (props: any) => {
    if (props.filter === props.currentFilter) {
        return (<span> {props.children} </span>);
    }

    return (
        <a href='#' onClick={e => {e.preventDefault(); props.onLinkClick(props.filter)}}>{props.children}</a>
    );
};
