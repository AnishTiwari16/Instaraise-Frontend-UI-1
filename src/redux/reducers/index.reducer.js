// eslint-disable-next-line
import { combineReducers } from 'redux';

import {
    getTokenData,
    selectNetwork,
    selectedTokenDex,
} from './dex/dex.reducer';
import {
    fetchSaleData,
    participateInSaleData,
} from './projects/projects.reducer';

//staking
import {
    claimInstaRewards,
    fetchBalanceDetails,
    getHarvestValue,
    stakeInsta,
    stakeInstaLoader,
    stakingDetails,
    unstakeInsta,
} from './staking/staking.reducer';
import { KYC_PROCESS, stepperData } from './common/common.reducer';
import { priceGraph, selectedNoDays } from './graph.reducer';
import { fetchAllTrendingNews } from './news.reducer';
import { tokenInfo } from './stats.reducer';
import { walletAddress } from './wallet/wallet.reducer';
import {
    createSaleLoader,
    finialiseLoader,
    lockUpLiquidityLoader,
    project,
    selfIdoProjects,
    userPortfolioData,
    userVerifyData,
    whitelistUsersLoader,
} from './selfHostedReducer/selfHostedReducer';
const rootReducer = combineReducers({
    allTrendingNews: fetchAllTrendingNews,
    tokenInfo: tokenInfo,
    priceGraph: priceGraph,
    selectedNoDays: selectedNoDays,
    wallet: walletAddress,
    selectedNetwork: selectNetwork,
    tokenStats: getTokenData,
    kycProcess: KYC_PROCESS,
    selectedToken: selectedTokenDex,
    //Stepper
    getSteps: stepperData,
    // project API
    fetchSaleData: fetchSaleData,
    participateInSaleData: participateInSaleData,
    //staking
    unstakeInsta: unstakeInsta,
    stakeInsta: stakeInsta,
    stakeInstaLoader: stakeInstaLoader,
    getHarvestValue: getHarvestValue,
    fetchBalanceDetails: fetchBalanceDetails,
    stakingDetails: stakingDetails,
    claimInstaRewards: claimInstaRewards,
    //self hosted ido details
    project: project,
    createSaleLoader: createSaleLoader,
    whitelistUsersLoader: whitelistUsersLoader,
    lockUpLiquidityLoader: lockUpLiquidityLoader,
    userVerifyData: userVerifyData,
    selfIdoProjects: selfIdoProjects,
    userPortfolioData: userPortfolioData,

    finialiseLoader: finialiseLoader,
});

export default rootReducer;
