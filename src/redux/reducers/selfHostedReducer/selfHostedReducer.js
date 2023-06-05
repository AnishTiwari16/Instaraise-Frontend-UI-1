import { NEW_PROJECT, TOKEN_ADDRESS } from '../../actions/index.action';

export const tokenAddress = (initialState = '', action) => {
    switch (action.type) {
        case TOKEN_ADDRESS:
            return action.payload;
        default:
            return initialState;
    }
};
const initialProject = {
    tokenAddress: '',
    decimals: 0,
    tokenId: 0,
    presaleStartTime: new Date(),
    presaleEndTime: new Date(),
    privateSaleAllocation: '',
    privateSalePrice: '',
    publicStartTime: new Date(),
    publicEndTime: new Date(),
    publicMaxParticipation: 0,
    publicSalePrice: '',
    amountToSell: '',
    maxTokensToLp: '',
    tokenUnlockTime: new Date(),
    percentageRevenueToLP: '',
    lpLockupTime: new Date(),
    tokenDexPrice: '',
    stakingContract: '',
    timeBlock: 0,
    isPublicSaleWhitelisted: false,
    projectName: '',
    description: '',
    telegram: '',
    twitter: '',
    tokenName: '',
    logoURL: '',
    website: '',
    medium: '',
    github: '',
};
export const project = (initialState = initialProject, action) => {
    switch (action.type) {
        case NEW_PROJECT:
            return action.payload;
        default:
            return initialState;
    }
};
