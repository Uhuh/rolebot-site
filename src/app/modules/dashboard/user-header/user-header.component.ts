import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { JwtService } from 'src/app/shared/services/jwtHandler.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent implements OnInit {
  readonly discordAvatarLink = 'https://images.discordapp.net/avatars';

  username?: string;
  discrim?: string;
  avatarLink?: string;
  numGuilds?: number;

  constructor(private readonly jwtService: JwtService) {}

  ngOnInit(): void {
    combineLatest([
      this.jwtService.avatar$,
      this.jwtService.userId$,
      this.jwtService.username$,
      this.jwtService.discriminator$,
      this.jwtService.guilds$,
    ]).subscribe(([avatar, id, username, discrim, guilds]) => {
      this.avatarLink = `${this.discordAvatarLink}/${id}/${avatar}`;
      this.username = username;
      this.discrim = discrim;
      this.numGuilds = guilds?.length;
    });
  }
}
