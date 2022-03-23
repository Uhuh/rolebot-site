import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
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
    private readonly apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      if (params['code']) {
        this.apiService.authorizeUser(params['code']).subscribe(() => {
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
