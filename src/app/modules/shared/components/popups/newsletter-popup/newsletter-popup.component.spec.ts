import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterPopupComponent } from './newsletter-popup.component';

describe('NewsletterPopupComponent', () => {
  let component: NewsletterPopupComponent;
  let fixture: ComponentFixture<NewsletterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
