// Way 1:

require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalTransactions(blockNumber) {
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockTransactionCountByNumber",
        params: [
            blockNumber
        ], 
    });
    
    return response.data.result;
}

module.exports = getTotalTransactions;


// Way 2:

require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalTransactions(blockNumber) {
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber",
        params: [ 
            blockNumber, 
            false
        ],
    });
    
    return response.data.result.transactions.length;
}

module.exports = getTotalTransactions;

