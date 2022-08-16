import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { JwtService } from 'src/app/shared/services/jwtHandler.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  avatar?: string;
  userId?: string;
  show = false;

  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    combineLatest([this.jwtService.avatar$, this.jwtService.userId$]).subscribe(
      ([avatar, userId]) => {
        this.avatar = avatar;
        this.userId = userId;
      }
    );
  }

  signOut() {
    this.authService.signOut();
  }

  toggle() {
    this.show = !this.show;
  }
}
