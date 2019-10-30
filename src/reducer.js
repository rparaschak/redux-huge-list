const initialNotNormalizedState = {
    todos: Array(1000).fill(0).map((el, id) => ({id, action: id}))
};

export const notNormalizedTodos = (state = initialNotNormalizedState, action) => {

    if (action.type === 'EDIT_NOT_NORMALIZED_TODO') {
        const newTodo = action.payload;
        const todosCopy = [...state.todos];
        todosCopy[newTodo.id] = action.payload;

        return {
            ...state,
            todos: todosCopy,
        };
    }

    return state;
};


/** Normalized below */

const todos = Array(1000).fill(0).map((el, id) => ({id, action: id}));

const initialNormalizedState = {
    todosById: todos.reduce((todosById, todo) => { todosById[todo.id] = todo; return todosById; }, {}),
    todosIds: todos.map((el, id) => id),
};

export const normalizedTodos = (state = initialNormalizedState, action) => {

    if (action.type === 'EDIT_NORMALIZED_TODO') {
        const editedTodo = action.payload;

        return {
            ...state,
            todosById: {
                ...state.todosById,
                [editedTodo.id]: editedTodo,
            },

        };
    }

    return state;
};
