import { ACTION_EAT, ACTION_NAP, ACTION_PLAY } from './actions';

export const cat = (state, action) => {
    switch (action.type) {
        case ACTION_EAT:
            return {
                activity: ACTION_EAT,
            };
        case ACTION_PLAY:
            return {
                activity: ACTION_PLAY,
            };
        case ACTION_NAP:
            return {
                activity: ACTION_NAP,
            };
        default:
            return state;
    }
};
