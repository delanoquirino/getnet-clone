import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-input.component.html',
  styles: ['']
})
export class CardInputComponent {
  @Input() title!: string;

  constructor() {}
}
