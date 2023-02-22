import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GuildReactType } from '../../types/interfaces';

interface IFakeReactRole {
  emoji: string;
  color: string;
  name: string;
  count: number;
}

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DiscordComponent {
  type = GuildReactType.reaction;
  hideEmojis = false;

  emoji = '🟥';

  reactRoles: IFakeReactRole[] = [
    {
      emoji: '🟥',
      color: '#f8312f',
      name: 'Red',
      count: 27,
    },
    {
      emoji: '🟩',
      color: '#00d26a',
      name: 'Green',
      count: 9,
    },
    {
      emoji: '🟦',
      color: '#0074ba',
      name: 'Blue',
      count: 19,
    },
    {
      emoji: '🟪',
      color: '#8d65c5',
      name: 'Purple',
      count: 92,
    },
  ];

  get isReaction() {
    return this.type === GuildReactType.reaction;
  }

  get isButton() {
    return this.type === GuildReactType.button;
  }

  trackByFn(index: number, reactRole: IFakeReactRole) {
    return reactRole.emoji;
  }
}
