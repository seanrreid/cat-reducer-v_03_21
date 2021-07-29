export const ACTION_SET_NAME = 'ACTION_SET_NAME';
export const ACTION_SET_ACTIVITY = 'ACTION_SET_ACTIVITY';
export const ACTION_ADD_CAT = 'ACTION_ADD_CAT';

export const setName = (name) => {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name,
        },
    };
};

export const setActivity = (id, activity) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            id,
            activity,
        },
    };
};

export const addCat = (name, activity) => {
    return {
        type: ACTION_ADD_CAT,
        payload: {
            name,
            activity,
        },
    };
};
