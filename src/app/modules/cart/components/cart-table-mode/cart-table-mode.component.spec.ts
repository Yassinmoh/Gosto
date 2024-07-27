import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableModeComponent } from './cart-table-mode.component';

describe('CartTableModeComponent', () => {
  let component: CartTableModeComponent;
  let fixture: ComponentFixture<CartTableModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartTableModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTableModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
