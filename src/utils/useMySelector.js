import { useReducer, useEffect, useRef } from 'react';

import myReduxStore from '../store';
// Or obtain from the context

const refEquality = (a, b) => a === b;

export const useMySelector = (selectorFn, equalityFn = refEquality) => {
    const [, forceRender] = useReducer(s => s + 1, 0);
    let prevSelectedStateRef = useRef(selectorFn(myReduxStore.getState()));

    useEffect(() => {
        const unsubscribe = myReduxStore.subscribe(() => {
            const currentState = myReduxStore.getState();
            const currentSelectedState = selectorFn(currentState);
            if (!equalityFn(currentSelectedState, prevSelectedStateRef.current )) {
                forceRender();
            }
            prevSelectedStateRef.current = currentSelectedState;
        });
        return () => unsubscribe();
    }, [equalityFn, selectorFn]);

    return selectorFn(myReduxStore.getState());
};
