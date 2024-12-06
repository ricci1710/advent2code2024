import {DayBase} from "../../utlils/DayBase";

type PageData = {
  ruleMapper: Map<number, number[]>;
  pageMapper: number[][];
};

type PageResult = {
  correctlyOrdered: number[][];
  inCorrectlyOrdered: number[][];
};

export class Day05 extends DayBase {
  /**
   * 5651
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();
    const pageData: PageData = this.scan(storeData);

    const forward: PageResult = this.calcForward(pageData);
    const backward: PageResult = this.calcBackward(forward, pageData.ruleMapper);

    let sum = 0;
    backward.correctlyOrdered.forEach((item) => {
      const middle = Math.floor(item.length * 0.5);
      sum += item[middle];
    });

    return sum;
  }

  /**
   * solution: 4743
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    const pageData: PageData = this.scan(storeData);

    const forward: PageResult = this.calcForward(pageData);
    const backward: PageResult = this.calcBackward(forward, pageData.ruleMapper);

    backward.inCorrectlyOrdered.forEach((item) => {
      item.sort((a, b) => {
        const rules = pageData.ruleMapper.get(b);
        let found = false;
        if (rules) {
          found = rules.includes(a);
        }
        return found ? 1 : -1;
      });
    });

    let sum = 0;
    backward.inCorrectlyOrdered.forEach((item) => {
      const middle = Math.floor(item.length * 0.5);
      sum += item[middle];
    });

    return sum;
  }

  private scan(storeData: string[]): PageData {
    const ruleMapper = new Map<number, number[]>();
    const pageMapper: number[][] = [];

    let rules = true;
    storeData.forEach((item) => {
      if (item.trim() === '') {
        rules = false;
      } else if (rules) {
        const infos = item.split('|');
        const pageNumber: number = parseInt(infos[0].trim(), 10);
        const behindPage: number = parseInt(infos[1].trim(), 10);

        const pages = ruleMapper.get(pageNumber) ?? [];
        pages.push(behindPage);
        ruleMapper.set(pageNumber, pages);
      } else {
        const infos: number[] = item.split(',').map(x => parseInt(x.trim(), 10));
        pageMapper.push(infos);
      }
    });

    return {ruleMapper, pageMapper};
  }

  private calcForward(pageData: PageData): PageResult {
    const {ruleMapper, pageMapper} = pageData;

    const resultOk: number[][] = [];
    const resultNOk: number[][] = [];

    pageMapper.forEach((item) => {
      let correctRuleset = true;
      for (let i = 0; i < item.length; i++) {
        const pageNumber: number = item[i];
        const rule = ruleMapper.get(pageNumber);
        if (rule) {
          for (let j = i + 1; j < item.length; j++) {
            const behindPage: number = item[j];
            if (!rule.includes(behindPage)) {
              correctRuleset = false;
            }
          }
        }
      }
      if (correctRuleset) {
        resultOk.push(item);
      } else {
        resultNOk.push(item);
      }
    });

    return {correctlyOrdered: resultOk, inCorrectlyOrdered: resultNOk};
  }

  private calcBackward(forward: PageResult, ruleMapper: Map<number, number[]>): PageResult {
    const reversedPageMapper: number[][] = [];
    forward.correctlyOrdered.forEach((item) => {
      const reverse = [...item].reverse();
      reversedPageMapper.push(reverse);
    })

    const resultOk: number[][] = [];
    const resultNOk: number[][] = forward.inCorrectlyOrdered;

    reversedPageMapper.forEach((item) => {
      let correctRuleset = true;
      for (let i = 0; i < item.length; i++) {
        const pageNumber: number = item[i];
        const rule = ruleMapper.get(pageNumber);
        if (rule) {
          for (let j = i + 1; j < item.length; j++) {
            const behindPage: number = item[j];
            if (rule.includes(behindPage)) {
              correctRuleset = false;
            }
          }
        }
      }
      if (correctRuleset) {
        resultOk.push(item.reverse());
      } else {
        resultNOk.push(item.reverse());
      }
    });

    return {correctlyOrdered: resultOk, inCorrectlyOrdered: resultNOk};
  }
}
