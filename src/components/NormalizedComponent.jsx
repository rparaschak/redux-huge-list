import React, {useCallback} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {notNormalizedTodos} from "../reducer";
import {NormalizedTodoItem} from "./NormalizedTodoItem";

export const NormalizedComponent = () => {
    console.log('NormalizedComponent render');
    const dispatch = useDispatch();

    const todosIds = useSelector(({normalizedTodos}) => normalizedTodos.todosIds);

    /** Other way */
    /** Pay attention to shallowEqual */
    /*const {todosIds} = useSelector(({normalizedTodos}) => ({
        todoIds: normalizedTodos.todosIds,
    }), shallowEqual);*/

    const updateTodo = useCallback(e => dispatch({
        type: 'EDIT_NORMALIZED_TODO',
        payload: {
            id: e.target.name,
            action: e.target.value,
        },
    }), [dispatch]);

    return (
        <>
            {todosIds.map(id => (
                <NormalizedTodoItem key={id} todoId={id} onChange={updateTodo}/>
            ))}
        </>
    );
};