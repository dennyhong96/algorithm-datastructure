class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// First In Last Out
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push like
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return ++this.size;
  }

  // shift like
  dequeue() {
    if (!this.first) return null;
    const oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.size--;
    return oldFirst.val;
  }
}

const queue = new Queue();
queue.enqueue(200);
queue.enqueue(300);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
