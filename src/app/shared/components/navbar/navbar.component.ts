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
  isFresh = false;

  constructor(private readonly jwtService: JwtService) {}

  ngOnInit(): void {
    this.jwtService.isFresh$.subscribe((isFresh) => (this.isFresh = !!isFresh));
  }

  toggleMobileMenu = () => (this.active = !this.active);
}
