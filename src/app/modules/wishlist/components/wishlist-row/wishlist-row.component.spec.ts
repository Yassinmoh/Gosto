import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistRowComponent } from './wishlist-row.component';

describe('WishlistRowCardComponent', () => {
  let component: WishlistRowComponent;
  let fixture: ComponentFixture<WishlistRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
