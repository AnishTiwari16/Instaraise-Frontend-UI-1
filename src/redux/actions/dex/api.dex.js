// eslint-disable-next-line
import { BeaconWallet } from '@taquito/beacon-wallet';

import axios from 'axios';
import BigNumber from 'bignumber.js';
import { TezosMessageUtils, TezosParameterFormat } from 'conseiljs';

import { DEX_NETWORK, RPC_NODES } from '../../../config/config';

import { CONTRACT_CONFIG } from '../../../config/network.config';

export const getPackedKey = (tokenId, address, type) => {
    const accountHex = `0x${TezosMessageUtils.writeAddress(address)}`;
    let packedKey = null;
    if (type === 'FA2') {
        packedKey = TezosMessageUtils.encodeBigMapKey(
            Buffer.from(
                TezosMessageUtils.writePackedData(
                    `(Pair ${accountHex} ${tokenId})`,
                    '',
                    TezosParameterFormat.Michelson
                ),
                'hex'
            )
        );
    } else {
        packedKey = TezosMessageUtils.encodeBigMapKey(
            Buffer.from(
                TezosMessageUtils.writePackedData(
                    `${accountHex}`,
                    '',
                    TezosParameterFormat.Michelson
                ),
                'hex'
            )
        );
    }
    return packedKey;
};

export const getBalance = async (tokenId, tokenType, NETWORK, decimal) => {
    try {
        if (!tokenType) {
            throw new Error('No token type passed');
        }
        const big_map_key =
            tokenType !== 'FA2'
                ? CONTRACT_CONFIG[DEX_NETWORK].BIG_MAP_FA1
                : CONTRACT_CONFIG[DEX_NETWORK].BIG_MAP_FA2;
        const wallet = new BeaconWallet({ name: NETWORK });
        let account = await wallet.client.getActiveAccount();
        let balance;
        const packedKey = getPackedKey(tokenId, account.address, tokenType);
        const connectedNetwork = NETWORK;
        const rpcNode = RPC_NODES[connectedNetwork];
        const url = `${rpcNode}/chains/main/blocks/head/context/big_maps/${big_map_key}/${packedKey}
        `;

        const response = await axios.get(url);
        balance =
            tokenType !== 'FA2'
                ? Number(response.data.args[1].int)
                : Number(response.data.int);
        balance = balance / Math.pow(10, Number(decimal));
        return balance.PrecisionMaker(2);
    } catch (error) {
        return 0;
    }
};

export const SourceToInstaPrice = async (
    sourceAddress,
    amount,
    tokenName,
    NETWORK
) => {
    try {
        const RPC_RESPONSE = await axios.get(
            `${
                RPC_NODES[NETWORK.toLowerCase()]
            }/chains/main/blocks/head/context/contracts/${sourceAddress}/storage`
        );
        const networkToken = RPC_RESPONSE.data.args[3][0].args[1].args[0].args;
        const sourceToken = RPC_RESPONSE.data.args[3][1].args[1].args[0].args;
        const sourceDecimals =
            Math.pow(10, 18) / RPC_RESPONSE.data.args[3][1].args[1].args[1].int;
        const instaDecimals =
            Math.pow(10, 18) / RPC_RESPONSE.data.args[3][0].args[1].args[1].int;

        const INSTA = new BigNumber(networkToken[1].int)
            .dividedBy(instaDecimals)
            .multipliedBy(new BigNumber(amount)) // it requires amount in tokens
            .dividedBy(
                new BigNumber(sourceToken[1].int)
                    .dividedBy(sourceDecimals)
                    .plus(new BigNumber(amount))
            )
            .toNumber();

        const BASE_TOKEN = new BigNumber(sourceToken[1].int)
            .dividedBy(sourceDecimals)
            .multipliedBy(new BigNumber(amount))
            .dividedBy(
                new BigNumber(networkToken[1].int)
                    .dividedBy(instaDecimals)
                    .plus(new BigNumber(amount))
            )
            .toNumber();

        const INSTA_IN_TERMS_OF_ONE = new BigNumber(networkToken[1].int)
            .dividedBy(instaDecimals)
            .multipliedBy(1)
            .dividedBy(
                new BigNumber(sourceToken[1].int)
                    .dividedBy(sourceDecimals)
                    .plus(1)
            )
            .toNumber();

        const BASE_TOKEN_IN_TERMS_OF_ONE = new BigNumber(sourceToken[1].int)
            .dividedBy(sourceDecimals)
            .multipliedBy(1)
            .dividedBy(
                new BigNumber(networkToken[1].int)
                    .dividedBy(instaDecimals)
                    .plus(1)
            )
            .toNumber();
        return {
            status: true,
            tokenName: tokenName,
            price_In_INSTA: INSTA,
            price_In_BASE: BASE_TOKEN,
            IN_TERMS_OF_ONE: {
                insta: INSTA_IN_TERMS_OF_ONE,
                base: BASE_TOKEN_IN_TERMS_OF_ONE,
            },
        };
    } catch (error) {
        return {
            status: false,
            tokenName: null,
            price_In_INSTA: 0,
            price_In_BASE: 0,
            IN_TERMS_OF_ONE: {
                insta: 0,
                base: 0,
            },
        };
    }
};
