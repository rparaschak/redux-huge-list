import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {notNormalizedTodos} from "../reducer";
import {NotNormalizedTodoItem} from "./NotNormalizedTodoItem";

export const NotNormalizedComponent = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector(({notNormalizedTodos}) => ({
        todos: notNormalizedTodos.todos,
    }));

    const updateTodo = useCallback(e => dispatch({
        type: 'EDIT_NOT_NORMALIZED_TODO',
        payload: {
            id: e.target.name,
            action: e.target.value,
        },
    }), [dispatch]);

        console.log(todos);

    return (
        <>
            {todos.map(todo => (<NotNormalizedTodoItem key={todo.id} action={todo.action} id={todo.id} onChange={updateTodo}/>))}
        </>
    );
};