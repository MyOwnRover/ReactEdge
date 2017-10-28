let nextTodoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const addCounter = (value) => ({
    type: 'ADD_COUNTER',
    value
});

export const miniteCounter = (value) => ({
    type: 'MINITE_COUNTER',
    value
});