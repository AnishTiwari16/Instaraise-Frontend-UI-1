// eslint-disable-next-line
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { KYB_VERIFY_API_URL, NAME, RPC_NODES } from '../../../config/config';
import axios from 'axios';

export const createSaleAPI = async ({
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
        const factory_contract = 'KT1RqRtKXLqW6Urc5CCtV6J8HmSWD88s3bD2';
        const contract = await Tezos.wallet.at(factory_contract);
        const operation = await contract.methods
            .originatePoolLockupPair(
                'tz1SfRoaCkrBkXqTzhz67QYVPJAU9Y2g48kq',
                tokensToSell,
                decimals,
                'tz1VRTputDyDYy4GjthJqdabKDVxkD3xCYGc',
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
                tokenAddress,
                tokenDexPrice,
                tokenId,
                tokenUnlockTime
            )
            .send();
        const operationHash = await operation
            .confirmation()
            .then(() => operation.opHash);

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
export const FetchProjectDataAPI = async () => {
    try {
        const URL = `https://api.tzkt.io/v1/contracts/KT1JLUXnNWjj92KA7KgPXMEzgPCgfSUnL9DX/storage`;
        const FETCH_STORAGE_RESP = await axios.get(URL);
        const { data } = FETCH_STORAGE_RESP;
        return {
            success: true,
            tokenAddress: data.token.address,
            decimals: data.token.decimals,
            tokenId: data.token.ID,
            presaleStartTime: data.time.private.start,
            presaleEndTime: data.time.private.end,
        };
    } catch (error) {
        return {
            success: false,
            error: error,
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
        const contract = await Tezos.wallet.at(
            'KT1Wk19CzTHskj9zpErA95VotxAyD51xSFgA'
        );
        console.log(contract.methods);
        const operation = await contract.methods
            .whitelistForPublicSale([args])
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
        const url = 'https://api.ghostnet.tzkt.io/v1/bigmaps/305889/keys';
        const response = await axios.get(url);
        const { data } = response;
        const TOKEN_ADDRESS = data.map((res) => {
            return res.value.TokenPoolAddress;
        });
        const RESP = TOKEN_ADDRESS.map(async (addr) => {
            const url = `https://api.ghostnet.tzkt.io/v1/contracts/${addr}/storage`;
            const resp = await axios.get(url);
            return resp.data;
        });
        const SALE_FETCH = await Promise.all(RESP);
        return {
            success: true,
            data: SALE_FETCH,
        };
    } catch (err) {
        return {
            success: false,
            data: err,
        };
    }
};
