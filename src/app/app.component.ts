import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Day01Component} from "./day01/day01.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Day01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'advent2code2024';
}
