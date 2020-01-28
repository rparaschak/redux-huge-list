import React, {useState, useCallback, memo} from 'react';

const initial = Array(100)
    .fill()
    .reduce((todosById, current, id) => {
        todosById[id] = { id, value: id };
        return todosById;
    }, {});

export const InternalMemoComponent = memo(({id, value, onChange}) => {
    console.log('I did render!');

    return (
        <div>
            <span>{id}</span>
            <input
                name={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
});

export const StateComponentWithInternal = () => {
    console.log('Parent render');
    const [normalizedTodos, setTodos] = useState(initial);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;

        setTodos( todos => ({
            ...todos,
            [name]: { id: name, value: value }
        }));

    }, [setTodos]);

    return (
        <>
            {Object.keys(normalizedTodos).map(todoKey => (
                <InternalMemoComponent
                    key={normalizedTodos[todoKey].id}
                    id={normalizedTodos[todoKey].id}
                    value={normalizedTodos[todoKey].value}
                    onChange={onChange}
                />
            ))}
        </>
    );
};


