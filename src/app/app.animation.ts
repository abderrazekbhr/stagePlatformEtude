import { trigger, animate, transition, style, group, query } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

export const slideInAnimation = trigger('slideInAnimation', [
  // Transition between any two states
  transition('* <=> *', [
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 0 }), { optional: true }),
    // group block executes in parallel
    group([
        query(':enter', [
            style({ 
                    filter:"blur(5)",
                }),
            animate('1s ease-in', 
                style({ 
                    opacity: 0,
                    filter:"blur(0)",
                })
            )
        ], { optional: true }),
        query(':leave',
            [
            style({opacity:0}),
            animate('0.8s ease-out', 
            style({ 
                filter:"blur(10)",
            }))
        ], { optional: true })
    ])
  ])
]);