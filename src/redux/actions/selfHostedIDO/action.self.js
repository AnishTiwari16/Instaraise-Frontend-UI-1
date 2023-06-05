// eslint-disable-next-line
import { CREATE_SALE, NEW_PROJECT } from '../index.action';
import { createSaleAPI } from './api.selfIDO';

export const createSaleAction = (args) => {
    return async (dispatch) => {
        const API_RESPONSE = await createSaleAPI(args);
        return dispatch({
            type: CREATE_SALE,
            payload: API_RESPONSE,
        });
    };
};
export const createNewProject = (args) => {
    return async (dispatch) => {
        return dispatch({
            type: NEW_PROJECT,
            payload: args,
        });
    };
};
