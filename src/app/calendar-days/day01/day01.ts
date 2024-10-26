import {DayBase} from "../../utlils/DayBase";
import {HttpClient} from "@angular/common/http";


export class Day01 extends DayBase  {
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();
    console.log(storeData);
    return -1;
  }

  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -10;
  }
}
