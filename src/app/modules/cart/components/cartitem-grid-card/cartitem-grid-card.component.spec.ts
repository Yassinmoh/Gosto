import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitemGridCardComponent } from './cartitem-grid-card.component';

describe('CartitemGridCardComponent', () => {
  let component: CartitemGridCardComponent;
  let fixture: ComponentFixture<CartitemGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartitemGridCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartitemGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
