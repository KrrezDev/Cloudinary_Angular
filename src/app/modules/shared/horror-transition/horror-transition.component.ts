import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-horror-transition',
  templateUrl: './horror-transition.component.html',
  styleUrls: ['./horror-transition.component.scss'],
  animations: [
    trigger('horrorAnimation', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('1000ms ease-out')),
      transition('out => in', animate('1000ms ease-in')),
    ])
  ]
})
export class HorrorTransitionComponent implements OnInit {
  state: string = 'in';

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.state = 'out';
      setTimeout(() => {
        this.router.navigate([this.router.url === '/auth/login' ? '/auth/register' : '/auth/login']);
      }, 1000);
    }, 4000);
  }
}
