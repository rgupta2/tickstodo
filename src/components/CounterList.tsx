import * as React from 'react';
import { CounterActionTypes } from "./CounterAction";
import { CounterState } from "./CounterReducer";
import { connect } from 'react-redux';

const mapStateToProps = (state: CounterState) => state;

const mapDispatchToProps = (dispatch: any) => ({
    incr: (index: number) => {
        dispatch({ type: CounterActionTypes.INCREMENT, index: index });
    },
    decr: (index: number) => {
        dispatch({ type: CounterActionTypes.DECREMENT, index: index });
    },
    remove: (index: number) => {
        dispatch({ type: CounterActionTypes.REMOVE, index: index });
    },
    add: () => {
        dispatch({ type: CounterActionTypes.ADD});
    },
});

class CounterList extends React.Component<any, any> {
    render() {
        return (
            <div key="counter">
                {this.props.list.map((value: number, index: number) => {
                    return (
                        <li key={index}>
                            <p>
                                <label>Counter: </label><b>{value}</b>
                            </p>
                            <button onClick={e => this.props.incr(index) }>&uarr;</button>
                            <span style={{ padding: "0 5px" }} />
                            <button onClick={e => this.props.decr(index) }>&darr;</button>
                            <span style={{ padding: "0 5px" }} />
                            <button onClick={e => this.props.remove(index) }>-</button>
                        </li>);
                })}
                <br />
                <button onClick={e => this.props.add() }>ADD_COUNTER</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
