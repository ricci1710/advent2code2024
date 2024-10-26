import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Day01} from "./calendar-days/day01/day01";
import {HttpClient} from "@angular/common/http";
import {DayComponent} from "./day/day.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  day: Day01;

  resultPartOne: number = -1;
  resultPartTwo: number = -1;

  constructor(private httpClient: HttpClient) {
    this.day = new Day01(1, this.httpClient)
    this.day.readDemoData().add(() => {
      this.resultPartOne = this.day.calcPartOne();
    })

    this.day.readPrivateData().add(() => {
      this.resultPartTwo = this.day.calcPartTwo();
    })
  }

  title = 'advent2code2024';
}
