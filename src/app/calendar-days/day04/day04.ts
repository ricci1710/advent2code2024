import {DayBase} from "../../utlils/DayBase";

export class Day04 extends DayBase {
  /**
   *
   * solution: ???
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();

    let sum = 0;
    sum += this.findInRow(storeData);
    console.log(this.findInRow(storeData));
    sum += this.findInColumn(storeData);
    console.log(this.findInColumn(storeData));
    sum += this.findTlBr(storeData);
    console.log(this.findTlBr(storeData));
    sum += this.findTrBl(storeData);
    console.log(this.findTrBl(storeData));

    return sum;
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
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
    const rowLength: number = charMap.size - 'XMAS'.length;

    for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
      for (let colIdx = 0; colIdx < colLength; colIdx++) {
        const char0 = (charMap.get(rowIdx) as string[])[colIdx] ?? '';
        const char1 = (charMap.get(rowIdx + 1) as string[])[colIdx + 1] ?? '';
        const char2 = (charMap.get(rowIdx + 2) as string[])[colIdx + 2] ?? '';
        const char3 = (charMap.get(rowIdx + 3) as string[])[colIdx + 3] ?? '';

        const txt = char0 + char1  + char2 + char3;
        if (txt.length === 'XMAS'.length)
          matrix.push(txt);
      }
    }

    console.log(matrix);

    return this.findInRow(matrix)
  }

  findTrBl(storeData: string[]) {
    const matrix: string[] = [];
    const charMap = new Map<number, string[]>();

    for (let idx = 0; idx < storeData.length; idx++) {
      charMap.set(idx, [...storeData[idx]]);
    }

    const colLength: number = charMap.get(0)?.length ?? 0;
    const rowLength: number = charMap.size - 'XMAS'.length;

    for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
      for (let colIdx = 0; colIdx < colLength; colIdx++) {
        const char0 = (charMap.get(rowIdx) as string[])[colIdx] ?? '';
        const char1 = (charMap.get(rowIdx + 1) as string[])[colIdx - 1] ?? '';
        const char2 = (charMap.get(rowIdx + 2) as string[])[colIdx - 2] ?? '';
        const char3 = (charMap.get(rowIdx + 3) as string[])[colIdx - 3] ?? '';

        const txt = char0 + char1  + char2 + char3;
        if (txt.length === 'XMAS'.length)
          matrix.push(txt);
      }
    }

    console.log(matrix);

    return this.findInRow(matrix)
  }
}
