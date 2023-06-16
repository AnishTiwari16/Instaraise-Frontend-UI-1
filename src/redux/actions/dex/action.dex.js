// eslint-disable-next-line
import { SELECT_TOKENS_DEX } from '../index.action';

export const SELECTED_TOKEN_DEX = (data) => {
    return async (dispatch) => {
        return dispatch({
            type: SELECT_TOKENS_DEX,
            payload: data,
        });
    };
};
