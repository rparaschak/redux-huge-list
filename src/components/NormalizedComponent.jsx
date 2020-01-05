import React, {useCallback} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {NormalizedTodoItemComponent} from "./NormalizedTodoItemComponent";
import {useMySelector} from "../utils/useMySelector";

export const NormalizedComponent = () => {
    console.log('NormalizedComponent render');
    const dispatch = useDispatch();

    const todosIds = useSelector(({normalizedTodos}) => normalizedTodos.todosIds);

    /** Using our own primitive useSelector*/
    //const todosIds = useMySelector(({normalizedTodos}) => normalizedTodos.todosIds);

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
                <NormalizedTodoItemComponent key={id} todoId={id} onChange={updateTodo}/>
            ))}
        </>
    );
};