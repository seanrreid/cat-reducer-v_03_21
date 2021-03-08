import { ACTION_EAT, ACTION_NAP, ACTION_PLAY } from './actionTypes';

export const actionEat = () => {
    return {
        type: ACTION_EAT
    }
}

export const actionNap = () => {
    return {
        type: ACTION_NAP
    }
}

export const actionPlay = () => {
    return {
        type: ACTION_PLAY,
    };
};