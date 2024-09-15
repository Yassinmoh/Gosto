import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDealsComponent } from './daily-deals.component';

describe('DailyDealsComponent', () => {
  let component: DailyDealsComponent;
  let fixture: ComponentFixture<DailyDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyDealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
