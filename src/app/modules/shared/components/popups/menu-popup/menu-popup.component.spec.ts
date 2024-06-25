import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopupComponent } from './menu-popup.component';

describe('MenuPopupComponent', () => {
  let component: MenuPopupComponent;
  let fixture: ComponentFixture<MenuPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
