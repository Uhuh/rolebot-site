import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { JwtService } from 'src/app/shared/services/jwtHandler.service';
import { ICategory, IGuild } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-guild-details',
  templateUrl: './guild-details.component.html',
  styleUrls: ['./guild-details.component.scss'],
})
export class GuildDetailsComponent implements OnInit, OnDestroy {
  private readonly unsubscribe = new Subject<void>();
  discordIconUrl = 'https://cdn.discordapp.com/icons';

  guild?: IGuild;
  categories: ICategory[] = [];

  constructor(
    private readonly jwtService: JwtService,
    private readonly apiService: ApiService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.jwtService.isFresh$,
      this.jwtService.guilds$,
      this.route.params,
    ]).subscribe(([isFresh, guilds, params]) => {
      if (!isFresh || !params['guildId']) return;

      this.guild = guilds?.find((g) => g.id === params['guildId']);
      this.apiService
        .getGuildCategories(params['guildId'])
        .subscribe((categories) => {
          this.categories = categories;
        });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  get guildIcon() {
    return `${this.discordIconUrl}/${this.guild?.id}/${this.guild?.icon}.webp`;
  }
}
