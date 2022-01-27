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

  constructor() {}

  ngOnInit(): void {}
}
