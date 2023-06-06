// eslint-disable-next-line
import {
    ADD_WHITELISTED_LOADER,
    ADD_WHITELISTED_USERS,
    CREATE_PROJECT_LOADER,
    CREATE_SALE,
    FETCH_PROJECT_DATA,
    NEW_PROJECT,
} from '../index.action';
import {
    FetchProjectDataAPI,
    addWhitelistedUsersAPI,
    createSaleAPI,
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
            dispatch({
                type: CREATE_SALE,
                payload: API_RESPONSE,
            });
        } else {
            dispatch({
                type: CREATE_PROJECT_LOADER,
                payload: false,
            });
            dispatch({
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
export const FetchProjectData = (args) => {
    return async (dispatch) => {
        const API_RESPONSE = await FetchProjectDataAPI(args);
        if (API_RESPONSE.success) {
            return dispatch({
                type: FETCH_PROJECT_DATA,
                payload: API_RESPONSE,
            });
        } else {
            return dispatch({
                type: FETCH_PROJECT_DATA,
                payload: API_RESPONSE,
            });
        }
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
