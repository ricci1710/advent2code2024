import {DayBase} from "../../utlils/DayBase";

export class Day04 extends DayBase {
  /**
   *
   * 2554
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();

    let sum = 0;
    sum += this.findInRow(storeData);
    sum += this.findInColumn(storeData);
    sum += this.findTlBr(storeData);
    sum += this.findTrBl(storeData);

    return sum;
  }

  /**
   * 1916
   */
  calcPartTwo(): number {
    return this.findTlBrP2(this.getStoreData());
  }

  private findInRow(storeData: string[]) {
    const regExp1 = new RegExp(/XMAS/gm);
    const regExpMatchArray1: RegExpMatchArray[] = [...storeData.toString().matchAll(regExp1)];

    const regExp2 = new RegExp(/SAMX/gm);
    const regExpMatchArray2: RegExpMatchArray[] = [...storeData.toString().matchAll(regExp2)];

    return regExpMatchArray1.length + regExpMatchArray2.length;
  }

  private findInColumn(storeData: string[]) {
    const matrix = new Map<number, string>();

    storeData.forEach(row => {
      const splitRow = [...row];
      for (let idx = 0; idx < splitRow.length; idx++) {
        let txt = matrix.get(idx) ?? '';
        txt += splitRow[idx];
        matrix.set(idx, txt);
      }
    })

    return this.findInRow(Array.from(matrix.values()));
  }

  /**
   * Scans a given array of strings and extracts diagonal sequences of characters
   * starting from the top-left to the bottom-right in a character matrix.
   *
   * @param storeData an array of strings where each string represents a row of the character matrix.
   * @return an array of strings that match the diagonal sequence pattern "XMAS" found in the character matrix.
   */
  findTlBr(storeData: string[]) {
    const matrix: string[] = [];
    const charMap = new Map<number, string[]>();

    for (let idx = 0; idx < storeData.length; idx++) {
      charMap.set(idx, [...storeData[idx]]);
    }

    const colLength: number = charMap.get(0)?.length ?? 0;
    const rowLength: number = charMap.size;

    for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
      for (let colIdx = 0; colIdx < colLength; colIdx++) {
        const char0 = this.getChar(rowIdx, colIdx, charMap);
        const char1 = this.getChar(rowIdx + 1, colIdx + 1, charMap);
        const char2 = this.getChar(rowIdx + 2, colIdx + 2, charMap);
        const char3 = this.getChar(rowIdx + 3, colIdx + 3, charMap);

        const txt = char0 + char1 + char2 + char3;
        if (txt.length === 'XMAS'.length)
          matrix.push(txt);
      }
    }

    return this.findInRow(matrix)
  }

  getChar(rowIdx: number, colIdx: number, charMap: Map<number, string[]>): string {
    let char: string = '';
    const row = charMap.get(rowIdx);
    if (row)
      char = row[colIdx] ?? '';
    return char;
  }

  findTrBl(storeData: string[]) {
    const matrix: string[] = [];
    const charMap = new Map<number, string[]>();

    for (let idx = 0; idx < storeData.length; idx++) {
      charMap.set(idx, [...storeData[idx]]);
    }

    const colLength: number = charMap.get(0)?.length ?? 0;
    const rowLength: number = charMap.size;

    for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
      for (let colIdx = 0; colIdx < colLength; colIdx++) {
        const char0 = this.getChar(rowIdx, colIdx, charMap);
        const char1 = this.getChar(rowIdx + 1, colIdx - 1, charMap);
        const char2 = this.getChar(rowIdx + 2, colIdx - 2, charMap);
        const char3 = this.getChar(rowIdx + 3, colIdx - 3, charMap);

        const txt = char0 + char1 + char2 + char3;
        if (txt.length === 'XMAS'.length)
          matrix.push(txt);
      }
    }

    return this.findInRow(matrix)
  }

  /**
   * Analyzes the given array of strings to find specific diagonal patterns ('MAS' or 'SAM')
   * in both left-to-right and right-to-left directions, and calculates a sum based on
   * intersections of these patterns.
   *
   * @param storeData The array of strings to be analyzed. Each string represents a row
   *                  of characters.
   * @return The sum of the number of intersecting patterns ('MAS' or 'SAM') found in
   *         both left-to-right and right-to-left diagonals.
   */
  private findTlBrP2(storeData: string[]) {
    const matrixLR: Map<number, number[]> = new Map();
    const matrixRL: Map<number, number[]> = new Map();
    const charMap = new Map<number, string[]>();

    for (let idx = 0; idx < storeData.length; idx++) {
      charMap.set(idx, [...storeData[idx]]);
    }

    const colLength: number = charMap.get(0)?.length ?? 0;
    const rowLength: number = charMap.size;

    for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
      for (let colIdx = 0; colIdx < colLength; colIdx++) {
        const char0 = this.getChar(rowIdx, colIdx, charMap);
        const char1 = this.getChar(rowIdx + 1, colIdx + 1, charMap);
        const char2 = this.getChar(rowIdx + 2, colIdx + 2, charMap);

        const txt = char0 + char1 + char2;
        if (txt === 'MAS' || txt === 'SAM') {
          const line = matrixLR.get(rowIdx) ?? [];
          line.push(colIdx);
          matrixLR.set(rowIdx, line);
        }
      }
    }

    for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
      for (let colIdx = 0; colIdx < colLength; colIdx++) {
        const char0 = this.getChar(rowIdx, colIdx, charMap);
        const char1 = this.getChar(rowIdx + 1, colIdx - 1, charMap);
        const char2 = this.getChar(rowIdx + 2, colIdx - 2, charMap);

        const txt = char0 + char1 + char2;
        if (txt === 'MAS' || txt === 'SAM') {
          const line = matrixRL.get(rowIdx) ?? [];
          line.push(colIdx);
          matrixRL.set(rowIdx, line);
        }
      }
    }

    let sum = 0;
    for (const [key, value] of matrixLR) { // Using the default iterator (could be `map.entries()` instead)
      const lineRL = matrixRL.get(key);
      if (lineRL === undefined)
        continue;

      value.forEach(colIdx => {
        const found = lineRL.find(item => item === (colIdx + 2))
        if (found)
          sum += 1;
      })
    }

    return sum;
  }
}
