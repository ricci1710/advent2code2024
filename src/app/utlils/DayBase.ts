import {HttpClient} from "@angular/common/http";

export abstract class DayBase {
  storeData: string[] = [];

  constructor(private day: number, private httpClient: HttpClient) {
    const url: string = '/assets/demo/day0' + this.day.toString() +'.dat';
    this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
    });
  }

  getStoreData():string [] {
    return this.storeData;
  }
}
