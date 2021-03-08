import { ACTION_EAT, ACTION_NAP, ACTION_PLAY } from './actionTypes';

export const cat = (state, action) => {
    switch (action.type) {
        case ACTION_EAT:
            return {
                activity: 'eating',
            };
        case ACTION_PLAY:
            return {
                activity: 'playing',
            };
        case ACTION_NAP:
            return {
                activity: 'napping',
            };
        default:
            return state;
    }
};
