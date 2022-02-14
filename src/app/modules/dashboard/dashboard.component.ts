import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, first, Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JwtService } from 'src/app/shared/services/jwtHandler.service';
import { IGuild } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  username?: string;
  guilds?: IGuild[] = [];

  constructor(
    private readonly jwtService: JwtService,
    private readonly route: ActivatedRoute,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      if (params['code']) {
        this.authService
          .authorizeUser(params['code'])
          .pipe(first())
          .subscribe(() => {
            this.jwtService.updateJwtToken();
          });
      }
    });

    combineLatest([
      this.jwtService.username$,
      this.jwtService.guilds$,
    ]).subscribe(([username, guilds]) => {
      this.username = username;
      this.guilds = guilds;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
