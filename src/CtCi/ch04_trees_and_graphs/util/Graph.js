class Graph {
  #nodes;
  constructor() {
    this.#nodes = [];
    console.log("Init graph", this.#nodes);
  }

  addEdge(node, edge) {
    if (this.#nodes[node] === undefined) {
      return "node does not exist";
    } else if (this.#nodes[node][edge]) {
      return `edge ${node}-${edge} already exists`;
    } else {
      this.#nodes[node][edge] = true;
    }
  }
}

export default Graph;
