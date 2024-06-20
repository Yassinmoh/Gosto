import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPopupComponent } from './shopping-cart-popup.component';

describe('ShoppingCartPopupComponent', () => {
  let component: ShoppingCartPopupComponent;
  let fixture: ComponentFixture<ShoppingCartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
