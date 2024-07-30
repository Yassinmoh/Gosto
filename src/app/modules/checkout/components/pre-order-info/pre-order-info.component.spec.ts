import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrderInfoComponent } from './pre-order-info.component';

describe('PreOrderInfoComponent', () => {
  let component: PreOrderInfoComponent;
  let fixture: ComponentFixture<PreOrderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOrderInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
