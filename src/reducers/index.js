import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import counters from './counter'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    counters
})

export default todoApp