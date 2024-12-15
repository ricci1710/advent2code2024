import {DayBase} from "../../utlils/DayBase";

export class Day09 extends DayBase {

  /**
   * Calculates a value based on stored data and generated HDD blocks, applying
   * specific transformation and summation logic.
   *
   * Converts store data into an array of numbers, generates HDD blocks, and
   * performs slicing and manipulation on these blocks until a certain condition
   * is met. Finally, calculates a result based on the manipulated blocks.
   *
   * @return {number} The calculated total based on the manipulated HDD blocks.
   */
  calcPartOne(): number {
    const storeData: number[] = [...this.getStoreData().toString()]
      .map(item => parseInt(item, 10));

    let count = 0;
    let hddBlocks = this.generateHddBlocks(storeData);
    do {
      const hddBlocksPart = hddBlocks.slice(-1);
      const position = hddBlocks.indexOf('.');
      hddBlocks = [hddBlocks.slice(0, position), hddBlocksPart, hddBlocks.slice(position)]
        .join('')
        .slice(0, -1);

      hddBlocks = hddBlocks.slice(0, position + 1) + hddBlocks.slice(position + 2);
      count += 1;

      if (count % 100)
        console.log(count);

    } while (hddBlocks.includes('.'))

    const convHddBlocks: number[] = [...hddBlocks].map(item => parseInt(item, 10));
    return convHddBlocks.reduce((accumulator, currentValue, index) => accumulator + currentValue * index, 0);
  }

  /**
   * Generates a string representing HDD blocks based on the input data, where even-indexed counts
   * are represented by the current ID number and odd-indexed counts are represented by dots.
   * The ID is incremented after processing each odd-indexed count.
   *
   * @param storeData An array of numbers where each number specifies the count of elements
   *                  to be added to the resulting HDD blocks string. Even-indexed counts
   *                  are represented by the current ID (as a string), and odd-indexed counts
   *                  are represented by dots. The ID starts at 0 and is incremented by 1 after
   *                  processing each odd-indexed count.
   * @return A string representing the sequence of HDD blocks generated from the input data.
   */
  generateHddBlocks(storeData: number[]): string {
    let id = 0;
    let hddBlocks = '';

    for (let i = 0; i < storeData.length; i++) {
      const count = storeData[i];
      if (i % 2 === 0) {
        for (let j = 0; j < count; j++) {
          hddBlocks += id.toString();
        }
      } else {
        for (let j = 0; j < count; j++) {
          hddBlocks += '.';
        }
        id += 1;
      }
    }
    return hddBlocks;
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();

    return -1;
  }
}
