const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(string) {
        let node = this.root;
        for(let i=0;i<string.length;i++) {
            if(!node.children[string[i]])
                node.children[string[i]] = new TrieNode(string[i]);
            node = node.children[string[i]];
            if(i==string.length-1) 
                node.isWord = true;
        }
    }

    contains(word) {
        let node = this.root;
        for(let i=0;i<word.length;i++) {
            if(!node.children[word[i]])
                return false;
            else
                node = node.children[word[i]];
        }
        return node.isWord;
    }
}

module.exports = Trie;