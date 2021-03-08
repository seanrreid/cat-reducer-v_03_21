import { ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actionTypes';

export const cat = (state, action) => {
    switch (action.type) {
        case ACTION_SET_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        case ACTION_SET_ACTIVITY:
            return {
                ...state,
                activity: action.payload.activity,
            };
        default:
            return state;
    }
};
