import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { JwtService } from '../../services/jwtHandler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('scrolled', [
      state('top', style({})),
      state(
        'scrolled',
        style({
          backgroundColor: 'var(--primary-color)',
        })
      ),
      transition('top <=> scrolled', animate('400ms ease')),
    ]),
    trigger('sidenav', [
      state(
        'out',
        style({
          marginRight: '-400px',
        })
      ),
      state(
        'in',
        style({
          marginRight: '0px',
        })
      ),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() scrollTop?: number;

  animationState = 'top';
  sideNavState = 'out';

  openSideNav = false;
  isFresh = false;
  enabled = false;

  constructor(private readonly jwtService: JwtService) {}

  ngOnInit(): void {
    this.jwtService.isFresh$.subscribe((isFresh) => (this.isFresh = !!isFresh));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.animationState = this.scrollTop ?? 0 > 20 ? 'scrolled' : 'top';
  }

  toggleSideNav = () => {
    this.openSideNav = !this.openSideNav;
    this.sideNavState = this.sideNavState === 'in' ? 'out' : 'in';
  };
}
