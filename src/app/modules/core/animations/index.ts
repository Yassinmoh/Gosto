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

export const fadeInUp = trigger('fadeInUp', [
  state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
  transition(':enter', [
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
])


export const fadeInDown = trigger('fadeInDown', [
  state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
  state('*', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('void => *', [
    animate('0.3s ease-out')
  ]),
  transition('* => void', [
    animate('0.2s ease-in')
  ])
])
