import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBannerComponent } from './grid-banner.component';

describe('GridBannerComponent', () => {
  let component: GridBannerComponent;
  let fixture: ComponentFixture<GridBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
