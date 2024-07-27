import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTotalsComponent } from './cart-totals.component';

describe('CartTotalsComponent', () => {
  let component: CartTotalsComponent;
  let fixture: ComponentFixture<CartTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartTotalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
