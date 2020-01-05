import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {NotNormalizedTodoItem} from "./NotNormalizedTodoItem";
import {useMySelector} from "../utils/useMySelector";

export const NotNormalizedComponent = () => {
    const dispatch = useDispatch();

    const {todos} = useSelector(({notNormalizedTodos}) => notNormalizedTodos);

    /** Using our own primitive useSelector*/
    // const todos = useMySelector(({notNormalizedTodos}) => notNormalizedTodos.todos);

    const updateTodo = useCallback(e => dispatch({
        type: 'EDIT_NOT_NORMALIZED_TODO',
        payload: {
            id: e.target.name,
            action: e.target.value,
        },
    }), [dispatch]);

    return (
        <>
            {todos.map(todo => (
                <NotNormalizedTodoItem key={todo.id} action={todo.action} id={todo.id} onChange={updateTodo}/>
            ))}
        </>
    );
};