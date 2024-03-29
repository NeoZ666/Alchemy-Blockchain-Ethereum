require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalBalance(addresses) {
    const batch = addresses.map((addr, i) => ({
        jsonrpc: "2.0",
        id: i,
        method: "eth_getBalance",
        params: [addr],
    }));

    const response = await axios.post(url, batch);

    return response.data.reduce((p,c) => p + parseInt(c.result), 0);
}

module.exports = getTotalBalance;

/* Your Goal: Total Balance

The getTotalBalance method will receive an array of several addresses.

Take each address and find its ether balance
Add all of these balances together to find the total balance of all the addresses and return it
*/
