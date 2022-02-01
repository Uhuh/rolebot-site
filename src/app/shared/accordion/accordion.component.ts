import { Component, Input, OnInit } from '@angular/core';
import { ISlashCommand } from '../types/interfaces';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() slashCommand?: ISlashCommand;
  active = false;

  constructor() {}

  ngOnInit(): void {}

  toggleContent = () => {
    this.active = !this.active;
  };
}
