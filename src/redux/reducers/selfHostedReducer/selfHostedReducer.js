import {
    ADD_WHITELISTED_LOADER,
    CREATE_PROJECT_LOADER,
    FINALISE_SALE_LOADER,
    IDO_DETAILS,
    NEW_PROJECT,
    TOKEN_ADDRESS,
    USER_PORTFOLIO,
    VERIFY_API,
} from '../../actions/index.action';

export const tokenAddress = (initialState = '', action) => {
    switch (action.type) {
        case TOKEN_ADDRESS:
            return action.payload;
        default:
            return initialState;
    }
};
const initialProject = {
    email: '',
    userAdminAddress: '',
    tokenAddress: '',
    decimals: 0,
    tokenId: 0,
    totalRaise: '',
    publicStartTime: new Date(),
    publicEndTime: new Date(),
    publicMaxParticipation: 1,
    publicSalePrice: '',
    amountToSell: '',
    maxTokensToLp: '',
    tokenUnlockTime: new Date(),
    percentageRevenueToLP: '',
    lpLockupTime: new Date(),
    tokenDexPrice: '',
    stakingContract: '',
    timeBlock: 0,
    minAllocation: '',
    maxAllocation: '',
    isPublicSaleWhitelisted: false,
    projectName: '',
    tokenName: '',
    description: '',
    logoURL: '',
    website: '',
};
export const project = (initialState = initialProject, action) => {
    switch (action.type) {
        case NEW_PROJECT:
            return action.payload;
        default:
            return initialState;
    }
};
export const createSaleLoader = (initialState = false, action) => {
    switch (action.type) {
        case CREATE_PROJECT_LOADER:
            return action.payload;
        default:
            return initialState;
    }
};

export const whitelistUsersLoader = (initialState = false, action) => {
    switch (action.type) {
        case ADD_WHITELISTED_LOADER:
            return action.payload;
        default:
            return initialState;
    }
};
export const userVerifyData = (initialState = '', action) => {
    switch (action.type) {
        case VERIFY_API:
            return action.payload;
        default:
            return initialState;
    }
};
export const selfIdoProjects = (initialState = [], action) => {
    switch (action.type) {
        case IDO_DETAILS:
            return action.payload;
        default:
            return initialState;
    }
};

export const finialiseLoader = (initialState = false, action) => {
    switch (action.type) {
        case FINALISE_SALE_LOADER:
            return action.payload;
        default:
            return initialState;
    }
};
export const userPortfolioData = (initialState = [], action) => {
    switch (action.type) {
        case USER_PORTFOLIO:
            return action.payload;
        default:
            return initialState;
    }
};
