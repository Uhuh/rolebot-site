import { Component, Input, OnInit } from '@angular/core';
import { IGuild } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-guild-card',
  templateUrl: './guild-card.component.html',
  styleUrls: ['./guild-card.component.scss'],
})
export class GuildCardComponent implements OnInit {
  @Input() guild?: IGuild;
  discordIconUrl = 'https://cdn.discordapp.com/icons';

  constructor() {}

  ngOnInit(): void {}

  get guildIcon() {
    return `${this.discordIconUrl}/${this.guild?.id}/${this.guild?.icon}.webp`;
  }
}
