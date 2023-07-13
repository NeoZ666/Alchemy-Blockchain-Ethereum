const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');
// const { providers } = require('ethers');

const provider = new providers.Web3Provider(ganacheProvider); 

const wallet = new Wallet(PRIVATE_KEY);

async function sendEther({ value, to }) {
    const rawTx = await wallet.signTransaction({ 
        value, to, 
        gasLimit: 0x5208,
        gasPrice: 0x3b9aca00 
    });

    const Sent = provider.sendTransaction(rawTx);
    return Sent;
}
module.exports = BroadcastTx;
