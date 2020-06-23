// The idea of this BFS algorithm is to dismiss parts of either tree if they do not share nodes at the same position.
// This allows our initial iteration to eliminate iterations by checking with its sibling tree.
// If they have child nodes at the same index then queue those nodes up for checking.

// O(log n)?
function mainA(A, B, X) {
  // queue the root node of both trees
  const queue = [[A, B]];

  while (queue.length > 0) {
    // get the matching pairs of nodes from queue
    const [nodeA, nodeB] = queue.pop();

    // if the nodeA is our target then return its alter from the B tree
    if (nodeA === X) return nodeB;

    // we only need to iterate to the minimal length of one of the coupled nodes children
    const minChildrenLength = Math.min(
      nodeA.children.length,
      nodeB.children.length
    );

    // for each pair of children in A & B tree push them as couples into the queue to be checked next iteration
    for (let i = 0; i < minChildrenLength; i++) {
      const childA = nodeA.children[i];
      const childB = nodeB.children[i];
      if (childA && childB) {
        queue.push([nodeA.children[i], nodeB.children[i]]);
      }
    }
  }
}

const found = mainA(
  document.getElementById("A"),
  document.getElementById("B"),
  document.getElementById("X")
);
console.log(found);
