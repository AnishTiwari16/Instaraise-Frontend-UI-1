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
export const verifyAPI = async ({ email, xtzAddress }) => {
    try {
        const req = await fetch(KYB_VERIFY_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                address: xtzAddress,
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
