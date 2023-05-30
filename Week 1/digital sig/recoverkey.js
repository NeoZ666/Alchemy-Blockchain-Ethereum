const { keccaconst,secp } = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const msgHash = await hashMessage(message);
    return secp.recoverPublicKey(msgHash, signature, recoveryBit, isCompressed = false)
}

module.exports = recoverKey;