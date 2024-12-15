import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

export abstract class DayBase {
  storeData: string[] = [];

  constructor(private day: number, private httpClient: HttpClient) {
  }

  readDemoData(): Subscription {
    const url = `/assets/demo/day${this.day < 10 ? '0' : ''}${this.day}.dat`;
    return this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
      this.storeData.pop();
    });
  }

  readPrivateData() {
    const url = `/assets/private/day${this.day < 10 ? '0' : ''}${this.day}.dat`;
    return this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
      this.storeData.pop();
    });
  }

  abstract calcPartOne(storeData: string[]): number;

  abstract calcPartTwo(storeData: string[]): number;

  getStoreData(): string[] {
    return this.storeData;
  }
}
