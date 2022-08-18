import { Component, OnInit } from '@angular/core';
import { ISlashCommand } from 'src/app/shared/types/interfaces';
import commands from 'src/commands.json';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {
  categoryCommands: ISlashCommand[] = commands['category'] ?? [];
  reactCommands: ISlashCommand[] = commands['react'] ?? [];
  generalCommands: ISlashCommand[] = commands['general'] ?? [];

  categories = ['reaction', 'category', 'general'];
  activeItem = this.categories[0]; // Default to first item.

  constructor() {}

  ngOnInit(): void {}

  setActiveItem(item: string) {
    this.activeItem = item;
  }
}
