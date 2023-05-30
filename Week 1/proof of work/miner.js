const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

let mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction)
}

function mine() {
    const block = {
        id: blocks.length,
        transactions: [],
        nonce: 0,
    }
    while (block.transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        block.transactions.push(mempool.pop());
    }
    block.hash = SHA256(JSON.stringify(block)).toString();
    while(BigInt(`0x${block.hash}`) > TARGET_DIFFICULTY) {
        block.nonce++;
        block.hash = SHA256(JSON.stringify(block)).toString();
    }
    blocks.push(block)
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};