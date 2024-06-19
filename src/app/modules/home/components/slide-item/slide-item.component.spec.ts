import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideItemComponent } from './slide-item.component';

describe('SlideItemComponent', () => {
  let component: SlideItemComponent;
  let fixture: ComponentFixture<SlideItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
