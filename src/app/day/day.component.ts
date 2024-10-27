import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-day',
  standalone: true,
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})
export class DayComponent  {
  @Input() resultPartOne: number = -1;
  @Input() resultPartTwo: number = -1;
}
