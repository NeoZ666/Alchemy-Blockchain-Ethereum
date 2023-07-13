/*
 Your Goal: Complete the function donate

The function donate will take a private key and an array of charity addresses as it's two arguments.

The private key corresponds to an address pre-loaded with 10 ETH.

You will need to donate at least one ether to each of the charities in the array.
*/

const { utils, providers, Wallet } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

async function donate(privateKey, charities) {
    const wallet = new Wallet(privateKey, provider);
    for(let i = 0; i < charities.length; i++) {
        const charity = charities[i];
        await wallet.sendTransaction({
            value: utils.parseUnits('1','ether'),
            to: charity
        });
    } 
}

module.exports = donate;
