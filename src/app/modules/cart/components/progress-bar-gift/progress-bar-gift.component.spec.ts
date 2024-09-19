import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarGiftComponent } from './progress-bar-gift.component';

describe('ProgressBarGiftComponent', () => {
  let component: ProgressBarGiftComponent;
  let fixture: ComponentFixture<ProgressBarGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarGiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
