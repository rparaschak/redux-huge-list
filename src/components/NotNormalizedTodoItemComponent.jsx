import React from 'react';

export const NotNormalizedTodoItemComponent = ({id, action, onChange}) => {
    console.log('I did rerender.');
    return (
        <div>
            <span>{id}</span>
            <input
                name={id}
                value={action}
                onChange={onChange}
            />
        </div>
    );
};
