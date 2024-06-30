import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedPopupComponent } from './purchased-popup.component';

describe('PurchasedPopupComponent', () => {
  let component: PurchasedPopupComponent;
  let fixture: ComponentFixture<PurchasedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasedPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
