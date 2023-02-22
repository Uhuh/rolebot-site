import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GuildReactType } from '../../types/interfaces';

interface IFakeReactRole {
  emoji: string;
  emojiIcon: string;
  color: string;
  name: string;
  count: number;
}

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.scss'],
})
export class DiscordComponent {
  @Input() type = GuildReactType.reaction;
  @Input() hideEmojis = false;

  emoji = '🟥';

  reactRoles: IFakeReactRole[] = [
    {
      emoji: '../../../assets/emojis/red.png',
      emojiIcon: '🟥',
      color: '#f8312f',
      name: 'Red',
      count: 27,
    },
    {
      emoji: '../../../assets/emojis/green.png',
      emojiIcon: '🟩',
      color: '#00d26a',
      name: 'Green',
      count: 9,
    },
    {
      emoji: '../../../assets/emojis/blue.png',
      emojiIcon: '🟦',
      color: '#0074ba',
      name: 'Blue',
      count: 19,
    },
    {
      emoji: '../../../assets/emojis/purple.png',
      emojiIcon: '🟪',
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
