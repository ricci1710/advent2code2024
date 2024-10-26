import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

export abstract class DayBase {
  storeData: string[] = [];

  constructor(private day: number, private httpClient: HttpClient) {
  }

  readDemoData():Subscription {
    const url: string = '/assets/demo/day0' + this.day.toString() +'.dat';
    return this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
    });
  }

  readPrivateData() {
    const url: string = '/assets/private/day0' + this.day.toString() +'.dat';
    return this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
    });
  }

  abstract calcPartOne(storeData: string[]): number;
  abstract calcPartTwo(storeData: string[]): number;

  getStoreData(): string[] { return this.storeData; }
}
