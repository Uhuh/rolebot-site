import { Component } from '@angular/core';
import { ISlashCommand } from 'src/app/shared/types/interfaces';
import commands from 'src/commands.json';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
  standalone: true,
  imports: [
    AccordionComponent,
    NgForOf,
    NgClass,
  ],
})
export class CommandsComponent {
  readonly categoryCommands: ISlashCommand[] = commands['category'] ?? [];
  readonly reactCommands: ISlashCommand[] = commands['react'] ?? [];
  readonly generalCommands: ISlashCommand[] = commands['general'] ?? [];
  readonly categories = ['reaction', 'category', 'general'];

  activeItem = this.categories[0]; // Default to first item.

  setActiveItem(item: string) {
    this.activeItem = item;
  }
}

export default CommandsComponent;
