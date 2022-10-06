class Graph {
  constructor(V) {
    this.V = V;
    this.adj = new Array(V);
  }
    addEdge(v, w) {
        let temp = [];
        temp.push(w);
        this.adj[v] = temp;
  }
  BFS(s) {
    let visited = new Array(this.V).fill(0);
    visited[s] = 1;
    let queue = [s];

    while (queue.length) {
      let s = queue[0];
      console.log(s);
        queue.pop();
        // console.log("lol" ,this.adj[s]);
      for (let adjecent of this.adj[s]) {
        if (!visited[adjecent]) {
          visited[adjecent] = 1;
          queue.push(adjecent);
        }
      }
    }
  }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("Following is Breadth First Traversal (starting from vertex 2)");
g.BFS(2);
