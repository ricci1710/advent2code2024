import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-day-card',
  standalone: true,
  imports: [],
  templateUrl: './day-card.component.html',
  styleUrl: './day-card.component.scss'
})
export class DayCardComponent {
  @Input({required:true}) day! : string;
  @Input({required:true}) resultPartOne! : number;
  @Input({required:true}) resultPartTwo! : number;
}
