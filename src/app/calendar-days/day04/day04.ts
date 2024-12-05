import {DayBase} from "../../utlils/DayBase";

type Position = {
  row: number;
  col: number;
};

export class Day04 extends DayBase {
  /**
   *
   * solution: ???
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
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();

    let sum = 0;
    // sum += this.findInRowP2(storeData);
    // sum += this.findInColumnP2(storeData);
    sum += this.findTlBrP2(storeData);
    // sum += this.findTrBl(storeData);

    return sum;
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
