// eslint-disable-next-line
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import {
    ALL_PROJECT_DETAILS_API_URL,
    FACTORY_CONTRACT_ADDRESS,
    FACTORY_CONTRACT_STRORAGE_KEY,
    INSTA_ADMIN_ADDRESS,
    KYB_VERIFY_API_URL,
    NAME,
    RPC_NODES,
} from '../../../config/config';
import axios from 'axios';
import { FetchSaleDataAPI } from '../ido/api.ido';
import { IDO_CONFIG } from '../../../config/Launchpad/Ido/IdoConfig';

export const createSaleAPI = async ({
    admin,
    tokensToSell,
    decimals,
    isPublicSaleWhitelisted,
    lpLockupTime,
    maxTokensToLp,
    percentageRevenueToLP,
    presaleEndTime,
    privateSaleAllocation,
    privateSalePrice,
    presaleStartTime,
    publicEndTime,
    publicMaxParticipation,
    publicSalePrice,
    publicStartTime,
    stakingContract,
    timeBlock,
    tokenDexPrice,
    tokenId,
    tokenUnlockTime,
    tokenAddress,
}) => {
    try {
        const connectedNetwork = 'testnet';
        const options = {
            name: NAME,
        };
        const wallet = new BeaconWallet(options);
        const Tezos = new TezosToolkit(RPC_NODES[connectedNetwork]);
        Tezos.setRpcProvider(RPC_NODES[connectedNetwork]);
        Tezos.setWalletProvider(wallet);
        const contract = await Tezos.wallet.at(FACTORY_CONTRACT_ADDRESS);
        const operation = await contract.methods
            .originatePoolLockupPair(
                admin,
                tokensToSell * Math.pow(10, 6),
                decimals * Math.pow(10, 6),
                INSTA_ADMIN_ADDRESS,
                isPublicSaleWhitelisted,
                lpLockupTime,
                maxTokensToLp * Math.pow(10, 6),
                percentageRevenueToLP,
                presaleEndTime,
                privateSaleAllocation,
                privateSalePrice,
                presaleStartTime,
                publicEndTime,
                publicMaxParticipation * Math.pow(10, 6),
                publicSalePrice * Math.pow(10, 6),
                publicStartTime,
                stakingContract,
                timeBlock,
                tokenAddress,
                tokenDexPrice * Math.pow(10, 6),
                tokenId,
                tokenUnlockTime
            )
            .send();
        const operationHash = await operation
            .confirmation()
            .then(() => operation.opHash);
        const url = `https://api.ghostnet.tzkt.io/v1/bigmaps/${FACTORY_CONTRACT_STRORAGE_KEY}/keys`;
        const response = await axios.get(url);
        const { data } = response;
        const TOKEN_POOL_ADDRESS = data.map((res) => {
            return res.value.TokenPoolAddress;
        });
        return {
            success: true,
            hash: operationHash,
            tokenPoolAddress: TOKEN_POOL_ADDRESS[TOKEN_POOL_ADDRESS.length - 1], //this will be the latest contract address
        };
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};
export const addWhitelistedUsersAPI = async (args) => {
    try {
        const connectedNetwork = 'testnet';
        const options = {
            name: NAME,
        };
        const wallet = new BeaconWallet(options);
        const Tezos = new TezosToolkit(RPC_NODES[connectedNetwork]);
        Tezos.setRpcProvider(RPC_NODES[connectedNetwork]);
        Tezos.setWalletProvider(wallet);
        const contract = await Tezos.wallet.at(args.tokenPoolAddress);
        const operation = await contract.methods
            .whitelistForPublicSale([args.whitelistUsersAddr])
            .send();
        const operationHash = await operation
            .confirmation()
            .then(() => operation);
        return {
            success: true,
            hash: operationHash,
        };
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};
export const verifyAPI = async ({ email, wallet }) => {
    try {
        const req = await fetch(KYB_VERIFY_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                address: wallet,
            }),
        });
        const res = await req.json();
        return {
            success: true,
            data: res.data.session_id,
        };
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};
export const fetchIdoDetails = async () => {
    try {
        const url = `https://api.ghostnet.tzkt.io/v1/bigmaps/${FACTORY_CONTRACT_STRORAGE_KEY}/keys`;
        const response = await axios.get(url);
        const { data } = response;
        const TOKEN_POOL_ADDRESS = data.map((res) => {
            return res.value.TokenPoolAddress;
        });
        const project_details = await axios.get(ALL_PROJECT_DETAILS_API_URL);
        const RESP = TOKEN_POOL_ADDRESS.map(async (api1Item) => {
            const matchingItem = project_details.data.data.find(
                (api2Item) => api2Item.tokenPoolAddress === api1Item
            );
            if (matchingItem) {
                const url = `https://api.ghostnet.tzkt.io/v1/contracts/${api1Item}/storage`;
                const resp = await axios.get(url);
                return { ...resp.data, ...matchingItem }; //combining both the data's
            }
        });
        const SALE_FETCH = await Promise.all(RESP);
        const filteredArray = SALE_FETCH.filter((value) => value !== undefined);
        return {
            success: true,
            data: filteredArray,
        };
    } catch (err) {
        return {
            success: false,
            data: err,
        };
    }
};
export const lockupLiquidityApi = async (args) => {
    try {
        const connectedNetwork = 'testnet';
        const options = {
            name: NAME,
        };
        const wallet = new BeaconWallet(options);
        const Tezos = new TezosToolkit(RPC_NODES[connectedNetwork]);
        Tezos.setRpcProvider(RPC_NODES[connectedNetwork]);
        Tezos.setWalletProvider(wallet);
        const contract = await Tezos.wallet.at(args.tokenPoolAddress);
        const operation = await contract.methods
            .lockupLiquidity(
                'KT1NQ77PLLEofaJJGiwguoMJhZBebnJruXRQ',
                false,
                0,
                0
            )
            .send();
        const operationHash = await operation
            .confirmation()
            .then(() => operation);
        return {
            success: true,
            hash: operationHash,
        };
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};
export const finaliseSaleAPI = async (args) => {
    try {
        const connectedNetwork = 'testnet';
        const options = {
            name: NAME,
        };
        const wallet = new BeaconWallet(options);
        let account = await wallet.client.getActiveAccount();
        const Tezos = new TezosToolkit(RPC_NODES[connectedNetwork]);
        Tezos.setRpcProvider(RPC_NODES[connectedNetwork]);
        Tezos.setWalletProvider(wallet);

        const poolContract = await Tezos.wallet.at(args.tokenPoolAddress);
        const tokenContract = await Tezos.wallet.at(args.tokenAddress);
        let batch = null;
        batch = Tezos.wallet
            .batch()
            .withContractCall(
                tokenContract.methods.update_operators([
                    {
                        add_operator: {
                            owner: account.address,
                            operator: args.tokenPoolAddress,
                            token_id: args.tokenId,
                        },
                    },
                ])
            )
            .withContractCall(poolContract.methods.depositTokens())
            .withContractCall(
                tokenContract.methods.update_operators([
                    {
                        remove_operator: {
                            owner: account.address,
                            operator: args.tokenPoolAddress,
                            token_id: args.tokenId,
                        },
                    },
                ])
            );
        const batchOperation = await batch.send();
        await batchOperation.confirmation().then(() => batchOperation.opHash);

        return {
            success: true,
        };
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};
export const userPortfolioAPI = async () => {
    try {
        const allSale = await fetchIdoDetails();
        let DATA = allSale.data.map(async (elem) => {
            const resp = await FetchSaleDataAPI({
                contractAddress: elem.tokenPoolAddress,
                ENROLLMENT_KEY: elem.enrolledParticipants,
                pricePerToken: elem.tokenPrice.public,
                DECIMALS: elem.token.decimals / Math.pow(10, 6),
                SALE_MAP_KEY: elem.details.sale,
                projectName: elem.projectName,
            });
            if (
                resp.data.contractAddress === elem.tokenPoolAddress &&
                resp.data.yourInvestments.length > 0
            ) {
                return (DATA = Object.assign({}, resp.data, elem));
            }
        });
        const VALUE = await Promise.all(DATA);
        let filteredArray = VALUE.filter((value) => {
            return value !== undefined;
        });
        const prevFilteredArray = IDO_CONFIG.filter((elem) => {
            if (
                elem.projectName === 'Lyzi' ||
                elem.projectName === 'ShuttleOne' ||
                elem.projectName === 'Aqarchain'
            ) {
                return elem;
            }
        });
        let PREV_SALES_DATA = prevFilteredArray.map(async (elem) => {
            const resp = await FetchSaleDataAPI({
                contractAddress: elem.tokenPoolAddress,
                ENROLLMENT_KEY: parseInt(elem.enrolledParticipants),
                pricePerToken: elem.tokenPrice.public,
                DECIMALS: elem.token.decimals / Math.pow(10, 6),
                SALE_MAP_KEY: parseInt(elem.details.sale),
                projectName: elem.projectName,
            });
            if (resp.data.yourInvestments.length > 0) {
                return (PREV_SALES_DATA = Object.assign({}, resp.data, elem));
            }
        });
        const PREV_VALUE = await Promise.all(PREV_SALES_DATA);
        let filteredPrevArray = PREV_VALUE.filter((value) => {
            return value !== undefined;
        });
        const combinedSaleData = [...filteredArray, ...filteredPrevArray];
        return {
            success: true,
            data: combinedSaleData,
        };
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};
