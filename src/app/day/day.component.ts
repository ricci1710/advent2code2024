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

  constructor(private httpClient: HttpClient, private dayNumber: number) {
  }

  ngOnInit(): void {
    const url: string = '/assets/demo/day01.dat';
    this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
    });
  }
}
