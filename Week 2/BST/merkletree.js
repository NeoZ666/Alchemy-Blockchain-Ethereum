class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = [...leaves];
        this.concat = concat;
    }

    getRoot() {
        while (this.leaves.length > 1) {
            const result = [];
            for (let i = 0; i < this.leaves.length; i += 2) {
                const leaf1 = this.leaves[i];
                const leaf2 = this.leaves[i + 1]; // If odd number of leaves, duplicate the last leaf
                if(leaf2) {
                    result.push(this.concat(leaf1, leaf2));
                }
                else {
                    result.push(leaf1);
                }
            }
            this.leaves = result;
        }
        return this.leaves[0] || null; // Return the root hash or null if there are no leaves
    }
}


module.exports = MerkleTree;
