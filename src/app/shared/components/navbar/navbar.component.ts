import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('dialogAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition('* => void', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'scale(0.8)' })
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  constructor() {}
}
