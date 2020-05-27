class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Last In First Out
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // like unshift in linked list, O(1) time
  push(val) {
    if (!this.first) {
      this.first = new Node(val);
      this.last = this.first;
    } else {
      const oldFirst = this.first;
      this.first = new Node(val);
      this.first.next = oldFirst;
    }
    return ++this.size; // short for this.size++; return this.size;
  }

  // like shift in linked list, O(1) time
  pop() {
    if (!this.first) return null;
    const poppedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode.val;
  }
}

const stack = new Stack();
console.log(stack.push(200));
stack.push(300);
stack.push(400);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
