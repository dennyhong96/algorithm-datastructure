class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(start, end) {
    // initialize states
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    for (let key in this.adjacencyList) {
      if (key === start) {
        distances[key] = 0;
        pq.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
      }
      previous[key] = null;
    }

    let smallestVal;
    let result = [];
    // iterate as long as there are vertexes in queue
    while (pq.values.length) {
      smallestVal = pq.dequeue().val;
      if (smallestVal === end) {
        // found shortest path, build result array
        while (previous[end]) {
          result.push(end);
          end = previous[end];
        }
        // add start vertex back in and re-order
        result = result.concat(start).reverse();
        break;
      } else if (smallestVal) {
        // there are still vertexes in queue to be evaluated
        this.adjacencyList[smallestVal].forEach((neighbor) => {
          const distSoFar = distances[smallestVal] + neighbor.weight;
          if (distSoFar < distances[neighbor.node]) {
            // update smallest distance from starting vertex for this neighbor
            distances[neighbor.node] = distSoFar;
            // push this neighbor on to the queue with updated priority
            pq.enqueue(neighbor.node, distSoFar);
            // update this neighbor's previous vertex
            previous[neighbor.node] = smallestVal;
          }
        });
      }
    }

    return result;
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.shortestPath("A", "E"));
