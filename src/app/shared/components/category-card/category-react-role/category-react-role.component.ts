import { Component, Input, OnInit } from '@angular/core';
import { IReactRole } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-category-react-role',
  templateUrl: './category-react-role.component.html',
  styleUrls: ['./category-react-role.component.scss'],
})
export class CategoryReactRoleComponent implements OnInit {
  @Input() reactRoles: IReactRole[] = [];
  readonly discordEmojiUrl = 'https://cdn.discordapp.com/emojis';

  constructor() {}

  ngOnInit(): void {}

  isCustomEmoji(reactRole: IReactRole) {
    return /\d{17,19}/.exec(reactRole?.emojiId || '');
  }

  emoji(reactRole: IReactRole) {
    const match = /\d{17,19}/.exec(reactRole?.emojiId || '');

    return match
      ? `${this.discordEmojiUrl}/${reactRole?.emojiId}`
      : reactRole?.emojiId;
  }
}
