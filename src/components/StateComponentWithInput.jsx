import React, {useState, useCallback, memo} from 'react';

const initial = Array(1000)
    .fill()
    .reduce((todosById, current, id) => {
        todosById[id] = { id, value: id };
        return todosById;
    }, {});

export const StateComponentWithInput = () => {
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
                <div key={normalizedTodos[todoKey].id}>
                    <span>{normalizedTodos[todoKey].id}</span>
                    <input
                        name={normalizedTodos[todoKey].id}
                        value={normalizedTodos[todoKey].value}
                        onChange={onChange}
                    />
                </div>
            ))}
        </>
    );
};


