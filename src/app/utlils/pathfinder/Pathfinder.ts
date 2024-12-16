/**
 * Explanation of the Algorithm
 * The A* algorithm uses both the actual distance traveled (costs so far) and a heuristic (estimated distance to the
 * target) to find the shortest path in an optimal manner. Here's how the algorithm will work:
 * 1. **Input**: The 2D array/grid where:
 * - `S` is the starting point.
 * - `E` is the ending point.
 * - `#` represents walls.
 * - Open cells are navigable.
 *
 * 2. **Output**: The shortest path length. Optionally, we can also retrieve the path itself.
 * 3. **Heuristic**: We'll use the Manhattan distance as the heuristic, which is suitable for this type of grid-based
 *    movement.
 */

type Point = {
  x: number;
  y: number;
};

type PathNode = {
  point: Point;
  cost: number; // Cost to reach this node
  heuristic: number; // Estimated cost to the target
  totalCost: number; // `cost + heuristic`
  parent?: PathNode; // Pointer to the parent node in the path
};

export function aStarPathfinding(grid: string[][]): number {
  const numRows = grid.length;
  const numCols = grid[0].length;

  let start: Point | null = null;
  let end: Point | null = null;

  // Find the start (S) and end (E) points.
  for (let x = 0; x < numRows; x++) {
    for (let y = 0; y < numCols; y++) {
      if (grid[x][y] === "S") start = {x, y};
      if (grid[x][y] === "E") end = {x, y};
    }
  }

  if (!start || !end) {
    throw new Error("Start (S) or End (E) point not found in the grid.");
  }

  // Calculate Manhattan distance as the heuristic
  function manhattanDistance(a: Point, b: Point): number {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  // Valid neighbors (4 directions: up, down, left, right)
  function getNeighbors(point: Point): Point[] {
    const directions = [
      {x: -1, y: 0}, // Up
      {x: 1, y: 0}, // Down
      {x: 0, y: -1}, // Left
      {x: 0, y: 1} // Right
    ];

    return directions
      .map((dir) => ({x: point.x + dir.x, y: point.y + dir.y}))
      .filter(
        (neighbor) =>
          neighbor.x >= 0 &&
          neighbor.x < numRows &&
          neighbor.y >= 0 &&
          neighbor.y < numCols &&
          grid[neighbor.x][neighbor.y] !== "#" // Avoid walls
      );
  }

  // Open list (priority queue)
  const open: PathNode[] = [];
  const closed: Set<string> = new Set(); // Closed set to avoid revisiting nodes

  // Add the starting point to the open list
  const startNode: PathNode = {
    point: start,
    cost: 0,
    heuristic: manhattanDistance(start, end),
    totalCost: manhattanDistance(start, end)
  };
  open.push(startNode);

  while (open.length > 0) {
    // Sort by totalCost (or use a priority queue)
    open.sort((a, b) => a.totalCost - b.totalCost);

    // Pick the node with the lowest total cost
    const current = open.shift()!;
    const currentKey = `${current.point.x},${current.point.y}`;

    if (current.point.x === end.x && current.point.y === end.y) {
      // Found the end point, return the cost
      return current.cost;
    }

    // Mark the current node as visited
    closed.add(currentKey);

    // Process neighbors
    for (const neighbor of getNeighbors(current.point)) {
      const neighborKey = `${neighbor.x},${neighbor.y}`;

      if (closed.has(neighborKey)) {
        continue; // Skip already visited nodes
      }

      const cost = current.cost + 1; // Moving to a neighbor costs 1
      const heuristic = manhattanDistance(neighbor, end);
      const totalCost = cost + heuristic;

      const existingNode = open.find(
        (node) => node.point.x === neighbor.x && node.point.y === neighbor.y
      );

      if (!existingNode) {
        // Add the neighbor to the open list
        open.push({
          point: neighbor,
          cost,
          heuristic,
          totalCost,
          parent: current
        });
      } else if (cost < existingNode.cost) {
        // Update the existing node with a better cost
        existingNode.cost = cost;
        existingNode.totalCost = totalCost;
        existingNode.parent = current;
      }
    }
  }

  // If we exit the loop, no path was found
  throw new Error("No path found from S to E.");
}

//
// // Example usage
// const grid = [
//   "###############".split(""),
//   "#.......#....E#".split(""),
//   "#.#.###.#.###.#".split(""),
//   "#.....#.#...#.#".split(""),
//   "#.###.#####.#.#".split(""),
//   "#.#.#.......#.#".split(""),
//   "#.#.#####.###.#".split(""),
//   "#...........#.#".split(""),
//   "###.#.#####.#.#".split(""),
//   "#...#.....#.#.#".split(""),
//   "#.#.#.###.#.#.#".split(""),
//   "#.....#...#.#.#".split(""),
//   "#.###.#.#.#.#.#".split(""),
//   "#S..#.....#...#".split(""),
//   "###############".split("")
// ];
//
// console.log(aStarPathfinding(grid)); // Output: Shortest path cost
