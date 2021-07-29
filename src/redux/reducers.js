import {
    ACTION_SET_NAME,
    ACTION_SET_ACTIVITY,
    ACTION_ADD_CAT,
} from './actions';

export const cat = (state, action) => {
    switch (action.type) {
        case ACTION_SET_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        case ACTION_SET_ACTIVITY:
            //const name = state.cats[id].name;
            return {
                ...state,
                [action.payload.id]: {
                    activity: action.payload.activity,
                },
            };
        case ACTION_ADD_CAT:
            const id =
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);

            return {
                cats: {
                    ...state.cats,
                    [id]: {
                        name: action.payload.name,
                        activity: action.payload.activity,
                    },
                },
            };
        default:
            return state;
    }
};
