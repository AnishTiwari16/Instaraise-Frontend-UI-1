// eslint-disable-next-line
import { CREATE_SALE } from '../index.action';
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
