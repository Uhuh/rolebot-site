import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  active = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMobileMenu = () => (this.active = !this.active);
}
