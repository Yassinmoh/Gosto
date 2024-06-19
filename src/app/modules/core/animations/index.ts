import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeInLeft = trigger('fadeInLeft', [
  state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
  transition(':enter', [
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
])
