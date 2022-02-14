import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { JwtService } from '../../services/jwtHandler.service';

@Component({
  selector: 'app-navbar',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          display: 'flex',
          maxHeight: '300px',
        })
      ),
      state(
        'closed',
        style({
          maxHeight: '0',
          overflow: 'hidden',
          opacity: '0',
          padding: '0',
        })
      ),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  active = false;
  avatar?: string;
  userId?: string;

  constructor(private readonly jwtService: JwtService) {}

  ngOnInit(): void {
    combineLatest([this.jwtService.avatar$, this.jwtService.userId$]).subscribe(
      ([avatar, userId]) => {
        this.avatar = avatar;
        this.userId = userId;
      }
    );
  }

  toggleMobileMenu = () => (this.active = !this.active);
}
