import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingProductCardComponent } from './selling-product-card.component';

describe('SellingProductCardComponent', () => {
  let component: SellingProductCardComponent;
  let fixture: ComponentFixture<SellingProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
