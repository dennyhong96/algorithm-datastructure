class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
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
      smallestVal = pq.dequeue().value;
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
