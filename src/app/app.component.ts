import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DayComponent} from "./day/day.component";
import {DayCardComponent} from "./calendar/day-card/day-card.component";
import {Day24} from "./calendar-days/day24/day24";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DayComponent, DayCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  resultPartOne: number = -1;
  resultPartTwo: number = -1;

  constructor(private httpClient: HttpClient) {
  }

  calculateDay01() {
    const day = new Day24(24, this.httpClient);
    day.readDemoData().add(() => {
      // this.resultPartOne = day.calcPartOne();
      // this.resultPartTwo = day.calcPartTwo();
    })

    day.readPrivateData().add(() => {
      // 36035961805424 to low
      this.resultPartOne = day.calcPartOne();
      // this.resultPartTwo = day.calcPartTwo();
    })
  }

  title = 'advent2code2024';
}
