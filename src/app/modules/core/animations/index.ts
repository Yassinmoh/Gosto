import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const fadeInLeft = trigger('fadeInLeft', [
  state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
  transition(':enter', [
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
])

export const fadeInRight = trigger('fadeInRight', [
  transition(':enter', [
    animate('0.5s ease-out', keyframes([
      style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
    ]))
  ])
]);
