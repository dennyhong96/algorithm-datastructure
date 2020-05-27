class Node {
  // lower value = higher priority
  // compare nodes by priority
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // this.time = new Date(); possible way to handle ties in priority
  }
}

// implement with a min heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let newNodeIdx = this.values.length - 1;
    let newNode = this.values[newNodeIdx];
    let parentIdx, parent;
    while (newNodeIdx > 0) {
      parentIdx = Math.floor((newNodeIdx - 1) / 2);
      parent = this.values[parentIdx];
      if (newNode.priority >= parent.priority) break;
      this.values[newNodeIdx] = parent;
      this.values[parentIdx] = newNode;
      newNodeIdx = parentIdx;
    }
  }

  dequeue() {
    const maxPriorityNode = this.values[0];
    const lastNode = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastNode;
      this.sinkDown();
    }
    return maxPriorityNode;
  }

  sinkDown() {
    const root = this.values[0];
    let rootIdx = 0;
    let lCNode, rCNode, lCIdx, rCIdx;
    while (true) {
      lCIdx = 2 * rootIdx + 1;
      rCIdx = 2 * rootIdx + 2;
      let swapIdx = null;
      if (lCIdx < this.values.length) {
        lCNode = this.values[lCIdx];
        if (root.priority > lCNode.priority) swapIdx = lCIdx;
      }
      if (rCIdx < this.values.length) {
        rCNode = this.values[rCIdx];
        if (
          (!swapIdx && root.priority > rCNode.priority) ||
          (swapIdx && lCNode.priority > rCNode.priority)
        ) {
          swapIdx = rCIdx;
        }
      }
      if (!swapIdx) break;
      this.values[rootIdx] = this.values[swapIdx];
      this.values[swapIdx] = root;
      rootIdx = swapIdx;
    }
  }
}

const ER = new PriorityQueue();
ER.enqueue("Common Cold", 5);
ER.enqueue("Gunshot Wound", 1);
ER.enqueue("High Fever", 4);
ER.enqueue("Broken Arm", 2);
ER.enqueue("Glass in foot", 3);
console.log("Min Heap: ", ER.values);
console.log("Dequeue 6 times: ");
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
