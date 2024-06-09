import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardInputComponent } from '../card-input/card-input.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,CardInputComponent],
  templateUrl: './products.component.html',
  styles: ['']
})
export class ProductsComponent {

}
