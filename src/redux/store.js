import { createStore } from 'redux';
import { cat } from './reducers';

const initialState = {
    cats: {
        1001: {
            name: 'Beans',
            activity: 'meowing',
        },
        1002: {
            name: 'Bandit',
            activity: 'eating',
        },
    },
};

export const store = createStore(
    cat,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
