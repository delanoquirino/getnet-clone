import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { ProductsComponent } from '../products/products.component';
import { SlideProductsComponent } from '../slide-products/slide-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent,HeroComponent, ProductsComponent,SlideProductsComponent],
  templateUrl: './home.component.html',
  styles: [''],
})
export class HomeComponent {

}
