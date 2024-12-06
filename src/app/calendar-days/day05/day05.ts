import {DayBase} from "../../utlils/DayBase";

type PageData = {
  ruleMapper: Map<number, number[]>;
  pageMapper: number[][];
};

export class Day05 extends DayBase {
  /**
   *
   * solution: ???
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();
    const pageData: PageData = this.scan(storeData);

    return this.calc(pageData);
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

  private calc(pageData: PageData): number {
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

    console.log(result);
    return -10
  }
}
