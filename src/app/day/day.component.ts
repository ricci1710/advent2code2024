import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})
export class DayComponent implements OnInit {
  resultPartOne: number = -1;
  resultPartTwo: number = -1;
  storeData: string[] = [];
  dayNumber = 1;

 constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const url: string = '/assets/demo/day0' + this.dayNumber.toString() +'.dat';
    this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
    });
  }
}
