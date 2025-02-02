import {Component, input, InputSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {TrimWordsPipe} from '../trim-words/trim-words.pipe';

@Component({
  selector: 'app-meal',
  imports: [
    RouterLink,
    NgOptimizedImage,

  ],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent {
  id: InputSignal<string> = input.required<string>();
  name: InputSignal<string> = input.required<string>();
  imageUrl: InputSignal<string> = input.required<string>();
}
