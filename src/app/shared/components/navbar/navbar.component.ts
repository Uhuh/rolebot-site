import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterLink } from '@angular/router';
import { INVITE_URL } from '../../../../main';

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
        }),
      ),
      state(
        'in',
        style({
          marginRight: '0px',
        }),
      ),
      transition('out => in', animate('500ms ease')),
      transition('in => out', animate('500ms ease')),
    ]),
  ],
  standalone: true,
  imports: [
    SidenavComponent,
    RouterLink,
  ],
})
export class NavbarComponent {
  protected readonly INVITE_URL = INVITE_URL;

  sideNavState = 'out';

  openSideNav = false;

  toggleSideNav = () => {
    this.openSideNav = !this.openSideNav;
    this.sideNavState = this.sideNavState === 'in' ? 'out' : 'in';
  };
}
