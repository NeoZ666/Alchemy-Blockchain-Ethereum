class Tree {
    constructor() {
      this.root = null;
    }
  
    addNode(child) {
      if (!this.root) {
        this.root = child;
      } else {
        this.addChildToParent(this.root, child);
      }
    }
  
    addChildToParent(parent, child) {
      if (child.data < parent.data) {
        if (parent.left) {
          this.addChildToParent(parent.left, child);
        } else {
          parent.left = child;
        }
      } else if (child.data > parent.data) {
        if (parent.right) {
          this.addChildToParent(parent.right, child);
        } else {
          parent.right = child;
        }
      }
    }
  
    hasNode(number) {
      if (!this.root) {
        return false;
      }
      return this.searchNode(number, this.root);
    }
  
    searchNode(number, node) {
      if(node) {
        if(number < node.data) {
          return this.searchNode(number, node.left);
        }
        if(number > node.data) {
          return this.searchNode(number, node.right);
        }
        else {
          return true;
        }
      }
      else if(!node) {
        return false;
      }
    }
  }
  
  
  module.exports = Tree;