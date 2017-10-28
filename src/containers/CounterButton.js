import React from 'react'
import {connect} from 'react-redux'
import {addCounter, miniteCounter} from '../actions'

import {Input, Button} from 'antd';

let CounterButton = ({onIncrease, onDecrease, value}) => {
    let count = 0;
    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <p>{value}</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    value: state.counters
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrease: () => {
        dispatch(addCounter())
    },
    onDecrease: () => {
        dispatch(miniteCounter())
    }
})
CounterButton = connect(mapStateToProps,mapDispatchToProps)(CounterButton);
export default CounterButton;

