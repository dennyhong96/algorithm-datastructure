class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val); // add the value to the end of list
    this.bubbleUp(); // bubble the value up to current position
  }

  bubbleUp() {
    let addedIdx = this.values.length - 1;
    const addedVal = this.values[addedIdx];
    let parentIdx, parent;
    while (addedIdx > 0) {
      parentIdx = Math.floor((addedIdx - 1) / 2); // find parent index
      parent = this.values[parentIdx];
      if (addedVal <= parent) break; // no need to adjust position, break out of loop
      this.values[parentIdx] = addedVal;
      this.values[addedIdx] = parent;
      addedIdx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    // to prevent re-adding last value back to heap
    if (this.values.length > 0) {
      this.values[0] = end; // replace root with last value
      this.sinkDown(); // trickle the new root down to correct position
    }
    return max;
  }

  sinkDown() {
    const rootVal = this.values[0];
    let rootIdx = 0;
    let leftChildIdx, rightChildIdx, leftChildVal, rightChildVal;
    while (true) {
      leftChildIdx = 2 * rootIdx + 1;
      rightChildIdx = 2 * rootIdx + 2;
      let swapIdx = null;
      // if there is a left child
      if (leftChildIdx < this.values.length) {
        leftChildVal = this.values[leftChildIdx];
        if (leftChildVal > rootVal) {
          swapIdx = leftChildIdx;
        }
      }
      // if there is a right child
      if (rightChildIdx < this.values.length) {
        rightChildVal = this.values[rightChildIdx];
        // left child value smaller than root value and right child value bigger than root value
        // OR left child value bigger than root value and right child value bigger than left child value
        if (
          (!swapIdx && rightChildVal > rootVal) ||
          (swapIdx && rightChildVal > leftChildVal)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      // root value bigger than both children's, no need to continue
      if (!swapIdx) break;
      // swap values, keep iterating
      this.values[rootIdx] = this.values[swapIdx];
      this.values[swapIdx] = rootVal;
      rootIdx = swapIdx;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
