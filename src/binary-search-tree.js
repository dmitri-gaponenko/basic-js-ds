const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    // console.log(" data:", data);
    let node = new Node(data);

    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }

    let iterateNode = this.rootNode;
    while (iterateNode) {
      if (node.data < iterateNode.data) {
        // console.log('less');
        if (!iterateNode.left) {          
          iterateNode.left = node;
          return;
        }
        iterateNode = iterateNode.left;
      }

      if (node.data > iterateNode.data) {
        // console.log('more');
        if (!iterateNode.right) {
          iterateNode.right = node;
          return;
        }
        iterateNode = iterateNode.right;
      }

      if (node.data === iterateNode.data) {
        // console.log('equal');
        return;
      }

    }

  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    if (data === this.rootNode.data) {
      return this.rootNode;
    }
    let iterateNode = this.rootNode;
    while (iterateNode) {
      if (data === iterateNode.data) {
        return iterateNode;
      } else if (data < iterateNode.data) {
        iterateNode = iterateNode.left;
      } else if (data > iterateNode.data) {
        iterateNode = iterateNode.right;
      } else {
        return iterateNode;
      }
    }
    return null;
  }

  remove(data) {
    if (this.rootNode === null) {
      return null;
    } else {
      this.rootNode = this.deleteNode(this.rootNode, data);
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  deleteNode(currentNode, data) {
    if (data === currentNode.data) {
      if (currentNode.right === null) {
        return currentNode.left;
      }
      if (currentNode.left === null) {
        return currentNode.right;
      }
      if (currentNode.right === null && currentNode.left === null) {
        return null;
      } else {
        let minNode = this.findMinNode(currentNode.right);
        currentNode.data = minNode.data;
        currentNode.right = this.deleteNode(currentNode.right, minNode.data);
        return currentNode;
      }
    } else if (data < currentNode.data) {
      if (currentNode.left === null) {
        return currentNode;
      } else {
        currentNode.left = this.deleteNode(currentNode.left, data);
        return currentNode;
      }
    } else if (data > currentNode.data) {
      if (currentNode.right === null) {
        return currentNode;
      } else {
        currentNode.right = this.deleteNode(currentNode.right, data);
        return currentNode;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node) {
      if (node.left) {
        node = node.left;
      } else {
        return node.data;
      }
    }
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node) {
      if (node.right) {
        node = node.right;
      } else {
        return node.data;
      }
    }
  }
}

/*
let tree = new BinarySearchTree();
tree.add(3);
tree.add(1);
tree.add(5);
tree.add(3);
tree.add(2);
tree.add(4);
tree.add(6);
tree.add(0);
// console.log('find(2)', tree.find(2));
// console.log('find(-2)', tree.find(-2));
//console.log(tree);
console.log('min', tree.min());
console.log('max', tree.max());
// console.log('find(2)', tree.find(2));
// console.log('find(5)', tree.find(5));
console.log('has(5)', tree.has(5));
console.log('has(55)', tree.has(55));

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
console.log('root()', tree.root());
tree.remove(14);
console.log('removed 14');
console.log('root()', tree.root());
/*tree.remove(8);
console.log('removed 8');
console.log('root()', tree.root());
tree.remove(9);
console.log('removed 9');

 console.log('root()', tree.root());*/

module.exports = {
  BinarySearchTree
};