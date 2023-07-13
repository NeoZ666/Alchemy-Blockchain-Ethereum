/* 
Retrieve the Balance
We'll leave this stage mostly up to you, but don't panic! 

You know enough to figure this one out. 

 Your Goal: Get the Balance
Given a privateKey, return a promise that will resolve with the balance of the address associated with it.
*/

const { Wallet, providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

function findMyBalance(privateKey) {
    const wallet = new Wallet(privateKey, provider);
    const Balance = wallet.getBalance()
    return Balance;
}

module.exports = findMyBalance;

// Don't use blockTag in getBalance as 'latest' here
