import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscordComponent } from './discord.component';

@NgModule({
  declarations: [DiscordComponent],
  imports: [CommonModule],
  exports: [DiscordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DiscordModule {}
