import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProductCardComponent } from './recommended-product-card.component';

describe('RecommendedProductCardComponent', () => {
  let component: RecommendedProductCardComponent;
  let fixture: ComponentFixture<RecommendedProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
