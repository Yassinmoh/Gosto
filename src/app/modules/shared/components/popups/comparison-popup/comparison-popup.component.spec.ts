import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonPopupComponent } from './comparison-popup.component';

describe('ComparisonPopupComponent', () => {
  let component: ComparisonPopupComponent;
  let fixture: ComponentFixture<ComparisonPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
