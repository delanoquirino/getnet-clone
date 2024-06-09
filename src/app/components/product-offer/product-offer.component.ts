import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-offer.component.html',
  styles: ['']
})
export class ProductOfferComponent {
  @Input() invoiceOver!: string;
  @Input() title!: string;
  @Input() rent!: string;
  @Input() description!: string;
  @Input() getPay!: string;
  @Input() specialCondition!: string;
  @Input() image!: string;
}
