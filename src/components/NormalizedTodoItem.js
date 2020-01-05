import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';

import {useMySelector} from '../utils/useMySelector'


export const NormalizedTodoItem = ({todoId, onChange}) => {
    console.log('I did rerender.');

    const todo = useMySelector(({normalizedTodos}) => normalizedTodos.todosById[todoId]);

    /** Other way */
    /** Pay attention to shallowEqual */
    /*const {todo} = useSelector(({normalizedTodos}) => ({
        todo: normalizedTodos.todosById[todoId]
    }), shallowEqual);*/

    return (
        <div>
            <span>{todo.id}</span>
            <input
                name={todo.id}
                value={todo.action}
                onChange={onChange}
            />
        </div>
    );
};
