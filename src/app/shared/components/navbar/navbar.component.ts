import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('sidenav', [
      state(
        'out',
        style({
          marginRight: '-1000px',
        })
      ),
      state(
        'in',
        style({
          marginRight: '0px',
        })
      ),
      transition('out => in', animate('500ms ease')),
      transition('in => out', animate('200ms ease')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  sideNavState = 'out';

  openSideNav = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSideNav = () => {
    this.openSideNav = !this.openSideNav;
    this.sideNavState = this.sideNavState === 'in' ? 'out' : 'in';
  };
}
