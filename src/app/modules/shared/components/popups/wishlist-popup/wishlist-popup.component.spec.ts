import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistPopupComponent } from './wishlist-popup.component';

describe('WishlistPopupComponent', () => {
  let component: WishlistPopupComponent;
  let fixture: ComponentFixture<WishlistPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
