import {DayBase} from "../../utlils/DayBase";

type Position = { row: number; col: number };

export class Day06 extends DayBase {
  position: Position = {row: 0, col: 0};

  override init() {
    super.init();
    this.findStartPos();
  }

  findStartPos() {
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
    console.log(this.position);
  }

  /**
   * solution: ???
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }
}
