import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './header.component.html',
  styles: [''],
})
export class HeaderComponent {

}
