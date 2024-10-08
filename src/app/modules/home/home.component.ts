import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GuildReactType } from 'src/app/shared/types/interfaces';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DiscordComponent } from '../../shared/components/discord/discord.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatRadioModule,
    MatCheckboxModule,
    DiscordComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  selectedType = GuildReactType.reaction;
  hideEmojis = false;

  onChange(event: any) {
    this.selectedType = Number(event.value);
  }

  onEmojiChange(event: { checked: boolean }) {
    this.hideEmojis = event.checked;
  }
}

export default HomeComponent;
