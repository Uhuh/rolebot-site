import { Component } from '@angular/core';
import { GuildReactType } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedType = GuildReactType.reaction;
  hideEmojis = false;

  onChange(event: any) {
    this.selectedType = Number(event.value);
  }

  onEmojiChange(event: any) {
    this.hideEmojis = event.checked;
  }
}
