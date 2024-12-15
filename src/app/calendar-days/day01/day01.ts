import {DayBase} from "../../utlils/DayBase";

/**
 * Represents the implementation of Day 01 challenge, extending the DayBase class.
 * It provides methods to generate lists from input data and calculate solutions for parts one and two.
 */
export class Day01 extends DayBase {

  generateList(): { list1: number[], list2: number[] } {
    const storeData: string[] = this.getStoreData();
    const list1: number[] = [];
    const list2: number[] = [];

    storeData.forEach((item) => {
      const itemPart: string[] = item.split(' ');
      if (itemPart.length < 3)
        throw new Error(`${itemPart.length} is not 2 => parsing error!`);

      list1.push(parseInt(itemPart[0], 10));
      list2.push(parseInt(itemPart[itemPart.length - 1], 10));
    });

    return {list1, list2};
  }

  /**
   * solution: 1882714
   */
  calcPartOne(): number {
    const {list1, list2} = this.generateList();

    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);

    let distance = 0;
    for (let i = 0; i < list1.length; i++) {
      const value1 = list1[i];
      const value2 = list2[i];

      distance += Math.abs(value1 - value2);
    }

    return distance;
  }

  /**
   * solution: 19437052
   */
  calcPartTwo(): number {
    const {list1, list2} = this.generateList();
    const counterMap = new Map();

    list2.forEach((key) => {
      const sum: number = counterMap.get(key) ?? 0;
      counterMap.set(key, sum + 1);
    })

    let distance = 0;
    list1.forEach((key) => {
      const count: number = counterMap.get(key) ?? 0;
      distance += (key * count);
    });

    return distance;
  }
}
