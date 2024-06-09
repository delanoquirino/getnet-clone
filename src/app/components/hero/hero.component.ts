import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './hero.component.html',
  styles: ['']
})
export class HeroComponent {

}
