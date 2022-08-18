import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../services/jwtHandler.service';

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
  isFresh = false;
  enabled = false;

  constructor(private readonly jwtService: JwtService) {}

  ngOnInit(): void {
    this.jwtService.isFresh$.subscribe((isFresh) => (this.isFresh = !!isFresh));
  }

  toggleSideNav = () => {
    this.openSideNav = !this.openSideNav;
    this.sideNavState = this.sideNavState === 'in' ? 'out' : 'in';
  };
}
