function isValid(node) {
  if (node.x >= 0 && node.x < 8 && node.y >= 0 && node.y < 8) return true;
  return false;
}
class coords {
  constructor(x = 0, y = 0, dist = 0, prev = null) {
    this.x = x;
    this.y = y;
    this.dist = dist;
    this.prev = prev;
  }
}

function knightMoves(start, end) {
  let changes = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];
  let visited = new Array(8).fill().map(() => Array(8).fill(0));
  let queue = [new coords(start[0], start[1])];
  visited[start[0]][start[1]] = 1;
  while (queue.length) {
    let node = queue[0];

    if (node.x == end[0] && node.y == end[1]) {
      return node;
    }

    for (let change of changes) {
      let child = new coords(
        change[0] + node.x,
        change[1] + node.y,
        node.dist + 1,
        node
      );

      if (child.x == end[0] && child.y == end[1]) {
        return child;
      }

      if (isValid(child) && !visited[child.x][child.y]) {
        queue.push(child);

        visited[child.x][child.y] = 1;
      }
    }
    queue.shift();
  }
}

let ans= []
function printPath(lastNode) {
  if (lastNode == null) return ;
  printPath(lastNode.prev);
  let res = [lastNode.x , lastNode.y];
  ans.push(res);

}
let startPosition = [0, 0];
let endPosition = [2, 4];
let lastNode = knightMoves(startPosition,endPosition);
console.log("Minimum moves", lastNode.dist);
printPath(lastNode);
console.log("Full Path",ans);
