import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Day01} from "./calendar-days/day01/day01";
import {HttpClient} from "@angular/common/http";
import {DayComponent} from "./day/day.component";
import {DayCardComponent} from "./calendar/day-card/day-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DayComponent, DayCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  resultPartOne: number = -1;
  resultPartTwo: number = -1;

  constructor(private httpClient: HttpClient) {
  }

  calculateDay01() {
    const day = new Day01(1, this.httpClient)
    day.readDemoData().add(() => {
      this.resultPartOne = day.calcPartOne();
    })

    day.readPrivateData().add(() => {
      this.resultPartTwo = day.calcPartTwo();
    })
  }

  title = 'advent2code2024';
}
