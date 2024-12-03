import {DayBase} from "../../utlils/DayBase";


type CorrectReports = {
  one: number[],
  two: number[],
}

export class Day02 extends DayBase {
  /**
   * 1,2,8,4,5 => Auf und ab => 2.Zahl korrigieren
   * 9,8,3,6,5 => Auf und ab => 2.Zahl korrigieren
   * 9,8,8,6,5 => Auf und ab => 2.Zahl korrigieren
   * Array(8) [67, 72, 73, 74, 76, 77, 78, 77] => dist entferne Pos 1
   * Array(8) [72, 67, 73, 74, 76, 77, 78, 77] => dist entferne Pos 2
   * Array(8) [77, 72, 73, 74, 76, 77, 78, 79] => dist
   * @param reportNumbers
   */
  reportsAreSave(reportNumbers: number[]): { unsave: boolean, correctReports: CorrectReports } {
    const length = reportNumbers.length;
    const increaseLevel: boolean = reportNumbers[0] < reportNumbers[1];

    let i;
    let correctReports: CorrectReports = {one: [], two: []};

    let unsave = false;
    for (i = 0; i < length - 1; i++) {
      const currentNumber = reportNumbers[i];
      const nextNumber = reportNumbers[i + 1];

      const dist = currentNumber - nextNumber;
      // Any two adjacent levels differ by at least one and at most three.
      if (dist === 0) {
        unsave = true;
        correctReports = this.getCorrectReports(i, reportNumbers);
        break;
      }

      if (Math.abs(dist) > 3) {
        unsave = true;
        correctReports = this.getCorrectReports(i, reportNumbers);
        break;
      }

      // levels are either all increasing
      if (dist > 0 && increaseLevel) {
        unsave = true;
        correctReports = this.getCorrectReports(i, reportNumbers);
        break;
      }

      //  levels are either all decreasing
      if (dist < 0 && !increaseLevel) {
        unsave = true;
        correctReports = this.getCorrectReports(i, reportNumbers);
        break;
      }
    }

    return {unsave, correctReports};
  }

  /**
   *
   * solution: 220
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();

    let saveReports = 0;
    storeData.forEach(row => {
      const reportNumbers = row.split(' ').map(item => parseInt(item, 10));
      saveReports += this.reportsAreSave(reportNumbers).unsave ? 0 : 1;
    });

    return saveReports;
  }

  /**
   * solution: 283 => to low, 312 => to height (291)
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    const unsaveReports: CorrectReports[] = [];

    let saveReports = 0;
    storeData.forEach(row => {
      const reportNumbers = row.split(' ').map(item => parseInt(item, 10));
      const {unsave, correctReports} = this.reportsAreSave(reportNumbers)

      if (unsave && correctReports) {
        unsaveReports.push(correctReports);
      } else
        saveReports += unsave ? 0 : 1;
    });

    unsaveReports.forEach(item => {
      const {one, two} = item;
      if (one && two) {
        if (!this.reportsAreSave(one).unsave)
          saveReports += 1;
        else if (!this.reportsAreSave(two).unsave)
          saveReports += 1;
      }
    });

    return saveReports;
  }

  getCorrectReports(index: number, reportNumbers: number[]): CorrectReports {
    const correctReports: CorrectReports = {
      one: [...reportNumbers],
      two: [...reportNumbers],
    };

    correctReports.one.splice(index, 1);
    correctReports.two.splice(index + 1, 1);

    return correctReports;
  }
}
