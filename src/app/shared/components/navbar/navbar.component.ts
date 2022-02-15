import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { JwtService } from '../../services/jwtHandler.service';

@Component({
  selector: 'app-navbar',
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
