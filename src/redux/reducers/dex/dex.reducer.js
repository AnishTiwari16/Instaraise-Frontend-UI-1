import {
    SELECT_NETWORK,
    SELECT_TOKENS_DEX,
    TOKEN_STATS_DATA,
} from '../../actions/index.action';
import uUSD_Img from '../../../assets/dex/uUSD.png';
import Insta_Img from '../../../assets/images/INSTA.png';
import { DEX_NETWORK } from '../../../config/config';
export const selectNetwork = (initialState = 'TESTNET', action) => {
    switch (action.type) {
        case SELECT_NETWORK:
            return action.payload;
        default:
            return initialState;
    }
};
export const getTokenData = (
    initialState = {
        success: false,
        data: [],
        error: null,
    },
    action
) => {
    switch (action.type) {
        case TOKEN_STATS_DATA:
            return action.payload;
        default:
            return initialState;
    }
};
export const DEX_INITIAL_STATE = {
    to: {
        id: 5,
        TOKEN_ADDRESS: 'KT1WJUpHRTJVLK7NPp2wRDy1QJuLEY2JKSDJ',
        DEX_ADDRESS: 'INSTA',
        TOKEN_TYPE: 'FA2',
        TOKEN_ID: '0',
        DECIMALS: '9',
        TOKEN_NAME: 'Insta',
        TOKEN_SYMBOL: 'INSTA',
        TOKEN_URL: `https://better-call.dev/${DEX_NETWORK}/KT1WJUpHRTJVLK7NPp2wRDy1QJuLEY2JKSDJ/storage`,
        TOKEN_LOGO: Insta_Img,
    },
    from: {
        id: 0,
        TOKEN_ADDRESS: 'KT1WJUpHRTJVLK7NPp2wRDy1QJuLEY2JKSDJ',
        DEX_ADDRESS: 'KT1XCbUT8Br79K9JQs9cLGB23DJhF9YFrnMe',
        TOKEN_TYPE: 'FA2',
        TOKEN_ID: '2',
        DECIMALS: '12',
        TOKEN_NAME: 'uUSD',
        BIG_MAP: '18451',
        TOKEN_SYMBOL: 'uUSD',
        TOKEN_URL: `https://better-call.dev/${DEX_NETWORK}/KT1XCbUT8Br79K9JQs9cLGB23DJhF9YFrnMe/storage`,
        TOKEN_LOGO: uUSD_Img,
    },
};
export const selectedTokenDex = (initialState = DEX_INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_TOKENS_DEX:
            return action.payload;
        default:
            return initialState;
    }
};
