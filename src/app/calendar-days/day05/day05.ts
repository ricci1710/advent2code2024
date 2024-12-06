import {DayBase} from "../../utlils/DayBase";

type PageData = {
  ruleMapper: Map<number, number[]>;
  pageMapper: number[][];
};

export class Day05 extends DayBase {
  /**
   * 5651
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();
    const pageData: PageData = this.scan(storeData);

    const forward: number[][] = this.calcForward(pageData);
    const backward: number[][] = this.calcBackward(forward, pageData.ruleMapper);

    let sum = 0;
    backward.forEach((item) => {
      const middle = Math.floor(item.length * 0.5);
      sum += item[middle];
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

  private calcForward(pageData: PageData): number[][] {
    const {ruleMapper, pageMapper} = pageData;

    const result: number[][] = [];
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
        result.push(item);
      }
    });

    return result;
  }

  private calcBackward(forward: number[][], ruleMapper: Map<number, number[]>): number[][] {
    const reversedPageMapper: number[][] = [];
    forward.forEach((item) => {
      const reverse = [...item].reverse();
      reversedPageMapper.push(reverse);
    })

    const result: number[][] = [];
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
        result.push(item.reverse());
      }
    });

    return result;
  }
}
