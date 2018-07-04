import * as React from 'react';
import { FilterLink } from "./FilterLink";

interface IProps {
    visibilityFilter: string,
    onFilterClick: Function
}

export const Footer = (props: IProps) => {
    return (
        <p key="footer">
            <FilterLink
            filter='SHOW_ALL'
            currentFilter={props.visibilityFilter}
            onLinkClick={props.onFilterClick}>
                ALL
            </FilterLink>
            {', '}
            <FilterLink
                filter='SHOW_ACTIVE'
                currentFilter={props.visibilityFilter}
                onLinkClick={props.onFilterClick}>
                ACTIVE
            </FilterLink>
            {', '}
            <FilterLink
                filter='SHOW_COMPLETED'
                currentFilter={props.visibilityFilter}
                onLinkClick={props.onFilterClick}>
                Completed
            </FilterLink>
        </p>);
};