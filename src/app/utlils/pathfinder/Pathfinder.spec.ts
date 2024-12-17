import {aStarPathfinding} from './Pathfinder';

describe('aStarPathfinding', () => {
  it('should find the shortest path from S to E in a simple grid', () => {
    const grid = [
      ['S', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', 'E']
    ];
    const result = aStarPathfinding(grid);
    expect(result).toBe(4);
  });

  it('should return the correct path cost avoiding obstacles', () => {
    const grid = [
      ['S', '#', '.'],
      ['.', '#', '.'],
      ['.', '.', 'E']
    ];
    const result = aStarPathfinding(grid);
    expect(result).toBe(4);
  });

  it('should throw an error if no start (S) point is found in the grid', () => {
    const grid = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', 'E']
    ];
    expect(() => aStarPathfinding(grid)).toThrowError('Start (S) or End (E) point not found in the grid.');
  });

  it('should throw an error if no end (E) point is found in the grid', () => {
    const grid = [
      ['S', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.']
    ];
    expect(() => aStarPathfinding(grid)).toThrowError('Start (S) or End (E) point not found in the grid.');
  });

  it('should throw an error if there is no path from S to E', () => {
    const grid = [
      ['S', '#', 'E'],
      ['#', '#', '#'],
      ['.', '.', '.']
    ];
    expect(() => aStarPathfinding(grid)).toThrowError('No path found from S to E.');
  });

  it('should handle larger grids with obstacles', () => {
    const grid = [
      ['S', '.', '.', '#', '.', '.', '.'],
      ['.', '#', '.', '#', '.', '#', '.'],
      ['.', '#', '.', '.', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '#', '.'],
      ['.', '.', '.', '.', '.', '.', 'E']
    ];
    const result = aStarPathfinding(grid);
    expect(result).toBe(10);
  });
});
