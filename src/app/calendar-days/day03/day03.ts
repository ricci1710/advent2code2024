import {DayBase} from "../../utlils/DayBase";


type CorrectReports = {
  one: number[],
  two: number[],
}

export class Day03 extends DayBase {
  /**
   * 183380722
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();

    let data: string = '';
    storeData.forEach(item => data += item);
    const regex = /(mul\((\d{1,3}),(\d{1,3})\))/gm;
    const regExpMatchArray: RegExpMatchArray[] = [...data.matchAll(regex)];

    let sum = 0;
    regExpMatchArray.forEach(item => {
      const factor1: number = parseInt(item[2], 10);
      const factor2: number = parseInt(item[3], 10);

      sum += (factor1 * factor2);
    });

    return sum;
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }
}
