import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Offering } from '../../types/offers';
import { ProductOfferComponent } from '../product-offer/product-offer.component';

@Component({
  selector: 'app-slide-products',
  standalone: true,
  imports: [ProductOfferComponent, CommonModule, ProductOfferComponent],
  templateUrl: './slide-products.component.html',
  styles: [''],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SlideProductsComponent  {

  offerings: Offering[] = [];


}
