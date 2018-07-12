import * as React from "react";
import * as styles from "./css/styles.css";
import { Filter } from "./Filter";

interface IProps {
    visibilityFilter: string;
    onFilterClick: Function;
}

export class FilterNavigation extends React.Component<IProps, any> {
    public shouldComponentUpdate(nextProps: IProps) {
        return this.props.visibilityFilter !== nextProps.visibilityFilter;
    }

    public render() {
    const filters: string[] = ["ALL", "ACTIVE", "COMPLETED"];

    return (
        <div className={styles.filterNav}>
            {filters.map((filter: string) => { return (
            <div key={filter} className={styles.filterNavItem}>
                <Filter
                    filter={filter}
                    currentFilter={this.props.visibilityFilter}
                    onLinkClick={this.props.onFilterClick}>
                    {filter}
                </Filter>
            </div>);
        })}
        </div>);
    }
}
