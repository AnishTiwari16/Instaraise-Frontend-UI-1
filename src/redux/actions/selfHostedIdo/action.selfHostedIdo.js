export const projectName = (args) => {
    return async (dispatch) => {
        return dispatch({
            type: 'projectName',
            payload: args,
        });
    };
};

export const tokenName = (args) => {
    return async (dispatch) => {
        return dispatch({
            type: 'tokenName',
            payload: args,
        });
    };
};
