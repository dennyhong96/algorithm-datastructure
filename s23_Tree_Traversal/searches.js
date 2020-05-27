class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  // Breadth First Search
  breadthFirstSearch() {
    const queue = [];
    const visited = [];
    queue.push(this.root);
    while (queue.length) {
      const processNode = queue.shift();
      visited.push(processNode.value);
      if (processNode.left) queue.push(processNode.left);
      if (processNode.right) queue.push(processNode.right);
    }
    return visited;
  }

  // Depth First Searches
  dfsPreOrder() {
    const result = [];
    function preOrderTraverse(root) {
      if (root) {
        result.push(root.value);
        preOrderTraverse(root.left);
        preOrderTraverse(root.right);
      }
    }
    preOrderTraverse(this.root);
    return result;
  }

  dfsInOrder() {
    const result = [];
    function inOrderTraverse(root) {
      if (root) {
        inOrderTraverse(root.left);
        result.push(root.value);
        inOrderTraverse(root.right);
      }
    }
    inOrderTraverse(this.root);
    return result;
  }

  dfsPostOrder() {
    const result = [];
    function postOrderTraverse(root) {
      if (root) {
        postOrderTraverse(root.left);
        postOrderTraverse(root.right);
        result.push(root.value);
      }
    }
    postOrderTraverse(this.root);
    return result;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (value !== current.value) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
      return undefined;
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

const tree = new binarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log("BFS: ", tree.breadthFirstSearch());
console.log("Preorder DFS: ", tree.dfsPreOrder());
console.log("Inorder DFS: ", tree.dfsInOrder());
console.log("Postorder DFS: ", tree.dfsPostOrder());
