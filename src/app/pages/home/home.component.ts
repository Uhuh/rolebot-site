import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { GuildReactType } from 'src/app/shared/types/interfaces';
import { DiscordComponent } from '../../shared/components/discord/discord.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatRadioModule, MatCheckboxModule, DiscordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
