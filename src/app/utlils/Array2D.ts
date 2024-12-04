type ArrayType = string | number;

export class Array2D<ArrayType> {
  array2d: ArrayType[][] = [];

  constructor(row: number, column: number, char?: ArrayType) {
    const line: ArrayType[] = []

    if (char) {
      for (let i = 0; i < column; i++) {
        line.push(char);
      }
    }

    for (let i = 0; i < row; i++) {
      this.array2d.push(line);
    }
  }

  addRowContent(rowIdx: number, content: ArrayType[]) {
    if (rowIdx >= this.array2d.length)
      throw Error('rowIdx is out of range');

    // const line:ArrayType[] = [];
    // for (let i = 0; i < content.length; i++) {
    //   line.push(content[i]);
    // }

    this.array2d[rowIdx].push(content);
    console.log(rowIdx, content);
  }
}
