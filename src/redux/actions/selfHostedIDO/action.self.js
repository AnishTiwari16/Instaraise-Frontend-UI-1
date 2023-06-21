// eslint-disable-next-line
import {
    ADD_WHITELISTED_LOADER,
    ADD_WHITELISTED_USERS,
    CREATE_PROJECT_LOADER,
    CREATE_SALE,
    IDO_DETAILS,
    NEW_PROJECT,
    VERIFY_API,
} from '../index.action';
import {
    addWhitelistedUsersAPI,
    createSaleAPI,
    fetchIdoDetails,
    verifyAPI,
} from './api.selfIDO';

export const createSaleAction = (args) => {
    return async (dispatch) => {
        dispatch({
            type: CREATE_PROJECT_LOADER,
            payload: true,
        });
        const API_RESPONSE = await createSaleAPI(args);
        if (API_RESPONSE.success) {
            dispatch({
                type: CREATE_PROJECT_LOADER,
                payload: false,
            });
            return dispatch({
                type: CREATE_SALE,
                payload: API_RESPONSE,
            });
        } else {
            dispatch({
                type: CREATE_PROJECT_LOADER,
                payload: false,
            });
            return dispatch({
                type: CREATE_SALE,
                payload: API_RESPONSE,
            });
        }
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
export const IdoProjectDetails = () => {
    return async (dispatch) => {
        const API_RESPONSE = await fetchIdoDetails();
        return dispatch({
            type: IDO_DETAILS,
            payload: API_RESPONSE,
        });
    };
};
export const addWhitelistedUsers = (args) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_WHITELISTED_LOADER,
            payload: true,
        });
        const API_RESPONSE = await addWhitelistedUsersAPI(args);
        if (API_RESPONSE.success) {
            dispatch({
                type: ADD_WHITELISTED_LOADER,
                payload: false,
            });
            dispatch({
                type: ADD_WHITELISTED_USERS,
                payload: API_RESPONSE,
            });
        } else {
            dispatch({
                type: ADD_WHITELISTED_LOADER,
                payload: false,
            });
            dispatch({
                type: ADD_WHITELISTED_USERS,
                payload: API_RESPONSE,
            });
        }
    };
};
export const userVerification = (args) => {
    return async (dispatch) => {
        const API_RESPONSE = await verifyAPI(args);
        if (API_RESPONSE.success) {
            return dispatch({
                type: VERIFY_API,
                payload: API_RESPONSE,
            });
        } else {
            return dispatch({
                type: VERIFY_API,
                payload: API_RESPONSE,
            });
        }
    };
};
