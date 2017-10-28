const counters = (state=0, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state+1
        case 'MINITE_COUNTER':
            return state-1
        default:
            return state
    }
}

export default counters
