import * as React from 'react';
import { Filter } from "./Filter";
import * as styles from './css/styles.css';

interface IProps {
    visibilityFilter: string,
    onFilterClick: Function
}

export const FilterNavigation = (props: IProps) => {
    const filters: Array<string> = ['ALL', 'ACTIVE', 'COMPLETED'];

    return (
        <div className={styles.filterNav}>
            {filters.map((filter: string)=> { return (
            <div className={styles.filterNavItem}>
                <Filter
                    key={filter}
                    filter={filter}
                    currentFilter={props.visibilityFilter}
                    onLinkClick={props.onFilterClick}>
                    {filter}
                </Filter>
            </div>);
        })}
        </div>);
};