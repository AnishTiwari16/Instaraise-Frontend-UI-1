// eslint-disable-next-line
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { NAME, RPC_NODES } from '../../../config/config';

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
        const contract = await Tezos.wallet.at(
            'KT1RqRtKXLqW6Urc5CCtV6J8HmSWD88s3bD2'
        );
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
                'KT1RqRtKXLqW6Urc5CCtV6J8HmSWD88s3bD2',
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
        console.log(operationHash);
    } catch (err) {
        console.log(err);
    }
};
