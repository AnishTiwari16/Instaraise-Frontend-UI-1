// import { BeaconWallet } from '@taquito/beacon-wallet';
// import { TezosToolkit } from '@taquito/taquito';
// import { NAME, RPC_NODES } from '../../../config/config';

export const createSaleAPI = async (args) => {
    console.log(args);
    // try {
    //     const connectedNetwork = 'testnet';
    //     const options = {
    //         name: NAME,
    //     };
    //     const wallet = new BeaconWallet(options);
    //     const Tezos = new TezosToolkit(RPC_NODES[connectedNetwork]);
    //     Tezos.setRpcProvider(RPC_NODES[connectedNetwork]);
    //     Tezos.setWalletProvider(wallet);
    //     const contract = await Tezos.wallet.at(
    //         'KT1RqRtKXLqW6Urc5CCtV6J8HmSWD88s3bD2'
    //     );
    //     const operation = await contract.methods
    //         .originatePoolLockupPair(
    //             'tz1SfRoaCkrBkXqTzhz67QYVPJAU9Y2g48kq',
    //             20,
    //             6
    //         )
    //         .send();
    //     console.log(operation);
    // } catch (err) {
    //     console.log(err);
    // }
};
