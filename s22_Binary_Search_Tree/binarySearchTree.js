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
  //   // recursive solution
  //   insert(val) {
  //     this.root = insertHelper(this.root, val);
  //     function insertHelper(root, val) {
  //       if (!root) {
  //         root = new Node(val);
  //       } else {
  //         if (val < root.value) {
  //           root.left = insertHelper(root.left, val);
  //         } else {
  //           root.right = insertHelper(root.right, val);
  //         }
  //       }
  //       return root;
  //     }
  //     return this;
  //   }

  // iterative solution
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      // handle duplicate nodes in while condition
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

  //   // recursive solution
  //   find(value) {
  //     function findHelper(root, value) {
  //       if (root === null) return false;
  //       if (root.value === value) return root;
  //       if (value < root.value) return findHelper(root.left, value);
  //       return findHelper(root.right, value);
  //     }
  //     return findHelper(this.root, value);
  //   }

  // iterative solution
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
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
// console.log(tree);
console.log(tree.find(100));
