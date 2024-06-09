import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideProductsComponent } from './slide-products.component';

describe('SlideProductsComponent', () => {
  let component: SlideProductsComponent;
  let fixture: ComponentFixture<SlideProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
