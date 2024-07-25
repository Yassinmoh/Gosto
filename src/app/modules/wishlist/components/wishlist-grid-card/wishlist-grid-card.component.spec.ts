import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistGridCardComponent } from './wishlist-grid-card.component';

describe('WishlistGridCardComponent', () => {
  let component: WishlistGridCardComponent;
  let fixture: ComponentFixture<WishlistGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistGridCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
