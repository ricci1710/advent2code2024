import {DayBase} from "../../utlils/DayBase";

type Position = { row: number; col: number };

export class Day06 extends DayBase {
  position: Position = {row: 0, col: 0};
  path: Map<number, Set<number>> = new Map();

  /**
   * Finds the starting position in a stored data grid, identified by the character '^'.
   * Updates the `position` property with the row and column indices where the
   * starting position is found.
   *
   * @return {void} This method does not return a value. It updates the object's
   *                 `position` property with the coordinates of the starting position
   *                 if it's found. If the starting position is not found, the `position`
   *                 remains unchanged.
   */
  private findStartPos = (): void => {
    const storeData: string[] = this.getStoreData();

    for (let rowIdx = 0; rowIdx < storeData.length; rowIdx++) {
      const row = storeData[rowIdx];
      const colIdx = row.indexOf('^');
      if (colIdx === -1)
        continue;

      this.position.row = rowIdx;
      this.position.col = colIdx;
      break;
    }
  };

  /**
   * Calculates the total size of all elements in the path.
   *
   * This method performs the following steps:
   * - Retrieves store data.
   * - Finds the starting position.
   * - Writes the path.
   * - Updates using the store data.
   * - Iterates over the path to calculate the sum of sizes.
   *
   * @return The total size of all elements in the path as a number.
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();
    this.findStartPos();
    this.writePath();
    this.up(storeData);

    let sum = 0;
    this.path.forEach((value, key) => sum += value.size);

    return sum;
  }

  /**
   * Moves the current position up in the `storeData` matrix if possible by checking the character at the next position.
   * If the next position is blocked by a barrier character ('#'), it will rotate the current direction 90° clockwise.
   * Continues moving up recursively until a barrier is encountered or the top of the matrix is reached.
   *
   * @param storeData An array of strings representing the data matrix where each string corresponds to a row.
   * @return void
   */
  up(storeData: string[]): void {
    if (this.position.row > 0) {
      const nextChar =storeData[this.position.row - 1][this.position.col];
      if (nextChar !== '#') {
        this.position.row--;
        this.writePath();
        this.up(storeData);
      }
      else {
        // rotate 90° clockwise
        this.right(storeData);
      }
    }
  }

  /**
   * Moves the position to the right within the grid represented by the storeData array.
   * If the next character to the right is not a '#', the position is updated and the method is called recursively.
   * If the next character is '#', the position changes direction to downwards.
   *
   * @param {string[]} storeData - An array of strings representing the grid where movement is performed.
   * @return {void} Does not return a value.
   */
  right(storeData: string[]): void {
    if (this.position.col < storeData[0].length-1) {
      const nextChar = storeData[this.position.row][this.position.col + 1];
      if (nextChar !== '#') {
        this.position.col += 1;
        this.writePath();
        this.right(storeData);
      } else {
        // rotate 90° clockwise
        this.down(storeData);
      }
    }
  }

  /**
   * Moves the position downwards in the `storeData` array while avoiding obstacles and potentially rotating.
   * If the next character in the downward direction is not a '#', it moves the position down by one row and recursively continues.
   * If the obstacle '#' is encountered, the direction is rotated 90° clockwise by calling the `left` method.
   *
   * @param {string[]} storeData - A two-dimensional array represented as an array of strings, where each string is a row.
   *                              The current position is stored in `this.position` with `row` and `col` properties.
   *                              The position will be moved based on certain conditions within this method.
   * @return {void} This method does not return a value.
   */
  down(storeData: string[]): void {
    if (this.position.row < storeData.length-1) {
      const nextChar =storeData[this.position.row + 1][this.position.col];
      if (nextChar !== '#') {
        this.position.row+=1;
        this.writePath();
        this.down(storeData);
      }
      else {
        // rotate 90° clockwise
        this.left(storeData);
      }
    }
  }

  /**
   * Moves the current position to the left within a 2D grid of strings.
   * If an obstructing character '#' is encountered, the direction changes upwards.
   * The method will recursively attempt to continue moving left after each successful move.
   *
   * @param storeData An array of strings representing the 2D grid, where each string is a row.
   * @return void
   */
  left(storeData: string[]): void {
    if (this.position.col > 0) {
      const nextChar = storeData[this.position.row][this.position.col - 1];
      if (nextChar !== '#') {
        this.position.col -= 1;
        this.writePath();
        this.left(storeData);
      } else {
        // rotate 90° clockwise
        this.up(storeData);
      }
    }
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }

  /**
   * Writes the current position to the path map.
   * This method updates the path by adding the current column
   * to the list of columns for the current row in the path.
   * If no entry exists for the current row, a new list is created.
   *
   * @return {void} This method does not return a value.
   */
  private writePath(): void {
    let row = this.path.get(this.position.row);
    if (!row)
      row = new Set();

    row.add(this.position.col);
    this.path.set(this.position.row, row);
  }
}
