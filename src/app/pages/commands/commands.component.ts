import { Component } from '@angular/core';
import { ISlashCommand } from 'src/app/shared/types/interfaces';
import commands from 'src/commands.json';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
  standalone: true,
  imports: [NgFor, NgClass, AccordionComponent],
})
export class CommandsComponent {
  categoryCommands: ISlashCommand[] = commands['category'] ?? [];
  reactCommands: ISlashCommand[] = commands['react'] ?? [];
  generalCommands: ISlashCommand[] = commands['general'] ?? [];

  categories = ['reaction', 'category', 'general'];
  activeItem = this.categories[0]; // Default to first item.

  setActiveItem(item: string) {
    this.activeItem = item;
  }
}
