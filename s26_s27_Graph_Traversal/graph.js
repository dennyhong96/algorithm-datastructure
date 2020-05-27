// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    // no error handling for now
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => this.removeEdge(v, vertex));
    delete this.adjacencyList[vertex];
  }

  // neighbors' neighbors before self's neighbors
  DFS_Recursive(vertex, result = [], visited = {}) {
    if (vertex) {
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) =>
          this.DFS_Recursive(neighbor, result, visited)
        );
      }
    }
    return result;
  }

  DFS_Iterative(vertex) {
    const stack = [vertex];
    const visited = { [vertex]: true };
    const result = [];
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // self's neighbor before neighbors' neighbors
  BFS(vertex) {
    const queue = [vertex];
    const visited = { [vertex]: true };
    const result = [];
    let currentVertex;
    while (queue.length) {
      // dequeue front of the visited queue after visiting
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // visit all neighbors that have not been visited
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g);
console.log(g.DFS_Recursive("A"));
console.log(g.DFS_Iterative("A"));
console.log(g.BFS("A"));
