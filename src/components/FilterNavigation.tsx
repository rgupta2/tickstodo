import * as React from "react";
import * as styles from "./css/styles.css";
import { Filter } from "./Filter";

interface IProps {
    visibilityFilter: string;
    onFilterClick: Function;
}

export class FilterNavigation extends React.Component<any, any> {
    public shouldComponentUpdate(nextProps: IProps) {
        return this.props.visibilityFilter !== nextProps.visibilityFilter;
    }

    public render() {
    const filters: string[] = ["ALL", "ACTIVE", "COMPLETED"];

    return (
        <div className={styles.filterNav}>
            {filters.map((filter: string) => { return (
            <div className={styles.filterNavItem}>
                <Filter
                    key={'F' + filter}
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
