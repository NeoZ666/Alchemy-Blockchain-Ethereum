class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = new Object();
        this.isWord = false;
    }
}

module.exports = TrieNode;