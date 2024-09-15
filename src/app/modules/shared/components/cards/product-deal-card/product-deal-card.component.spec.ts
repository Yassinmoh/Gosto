import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDealCardComponent } from './product-deal-card.component';

describe('ProductDealCardComponent', () => {
  let component: ProductDealCardComponent;
  let fixture: ComponentFixture<ProductDealCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDealCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDealCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
