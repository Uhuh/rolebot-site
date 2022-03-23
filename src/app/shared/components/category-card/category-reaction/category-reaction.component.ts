import { Component, Input, OnInit } from '@angular/core';
import { IReactRole } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-category-reaction',
  templateUrl: './category-reaction.component.html',
  styleUrls: ['./category-reaction.component.scss'],
})
export class CategoryReactionComponent implements OnInit {
  @Input() reactRole?: IReactRole;
  readonly discordEmojiUrl = 'https://cdn.discordapp.com/emojis';
  reactions = 1;
  clicked = false;

  constructor() {}

  ngOnInit(): void {}

  onReact() {
    this.clicked = !this.clicked;
    if (this.clicked) {
      this.reactions++;
    } else {
      this.reactions--;
    }
  }

  get isCustomEmoji() {
    return /\d{17,19}/.exec(this.reactRole?.emojiId || '');
  }

  get emoji() {
    const match = /\d{17,19}/.exec(this.reactRole?.emojiId || '');

    return match
      ? `${this.discordEmojiUrl}/${this.reactRole?.emojiId}`
      : this.reactRole?.emojiId;
  }
}
