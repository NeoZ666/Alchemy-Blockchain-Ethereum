const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const slicedPubK = publicKey.slice(1);
    const hash = keccak256(slicedPubK);
    return hash.slice(-20);
}

module.exports = getAddress;