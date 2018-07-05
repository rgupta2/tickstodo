import * as React from 'react';
import { FilterLink } from "./FilterLink";
import * as styles from './css/styles.css';

interface IProps {
    visibilityFilter: string,
    onFilterClick: Function
}

export const Footer = (props: IProps) => {
    const filters: Array<string> = ['ALL', 'ACTIVE', 'COMPLETED'];

    return (
        <div className={styles.filterNav} key="footer">
            {filters.map((filter: string)=> { return (
            <div className={styles.filterNavItem}>
                <FilterLink
                    filter={filter}
                    currentFilter={props.visibilityFilter}
                    onLinkClick={props.onFilterClick}>
                    {filter}
                </FilterLink>
            </div>);
        })}
        </div>);
};