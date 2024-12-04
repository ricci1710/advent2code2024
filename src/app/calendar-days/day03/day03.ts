import {DayBase} from "../../utlils/DayBase";


type Pair = {
  first: number,
  second: number,
};

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
   * 82733683
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    let data: string = 'do()';
    storeData.forEach(item => data += item);

    let sum = 0;
    let startPos = 0;
    let endPos = 0;
    let position: Pair[] = [];

    do {
      startPos = data.indexOf('do()', endPos);
      endPos = data.indexOf('don\'t()', startPos);

      if (startPos > -1)
        position.push({first: startPos, second: endPos});

    } while (endPos !== -1 && startPos !== -1);

    const regexDo = /(mul\((\d{1,3}),(\d{1,3})\))/gm;
    position.forEach(item => {
      const text = data.substring(item.first, item.second === -1 ? undefined : item.second);
      const regExpMatchArray: RegExpMatchArray[] = [...text.matchAll(regexDo)];

      regExpMatchArray.forEach(item1 => {
        const factor1: number = parseInt(item1[2], 10);
        const factor2: number = parseInt(item1[3], 10);

        sum += (factor1 * factor2);
      });
    })

    return sum;
  }
}
