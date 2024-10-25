import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-day01',
  standalone: true,
  imports: [],
  templateUrl: './day01.component.html',
  styleUrl: './day01.component.scss'
})
export class Day01Component implements OnInit {
  resultPartOne: number = -1;
  resultPartTwo: number = -1;

  storeData: string[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const url: string = '/assets/demo/day01.dat';
    this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
    });
  }
}
