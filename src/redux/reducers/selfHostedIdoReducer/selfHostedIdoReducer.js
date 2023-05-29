export const projectNameReducer = (initialState = '', action) => {
    switch (action.type) {
        case 'projectName':
            return action.payload;
        default:
            return initialState;
    }
};

export const tokenNameReducer = (initialState = '', action) => {
    switch (action.type) {
        case 'tokenName':
            return action.payload;
        default:
            return initialState;
    }
};
