import { AfterViewInit, Directive } from '@angular/core';

@Directive({
  selector: '[scrollToTop]',
  standalone: true
})
export class ScrollToTopDirective implements AfterViewInit{

  constructor() { }
  ngAfterViewInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
