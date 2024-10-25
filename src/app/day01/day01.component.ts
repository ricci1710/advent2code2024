import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DayComponent} from "../day/day.component";

@Component({
  selector: 'app-day01',
  standalone: true,
  imports: [],
  templateUrl: './day01.component.html',
  styleUrl: './day01.component.scss'
})
export class Day01Component extends DayComponent {

  constructor(httpClient: HttpClient) {
    super(httpClient, 1);
  }
}
