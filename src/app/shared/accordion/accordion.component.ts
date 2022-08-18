import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ISlashCommand } from '../types/interfaces';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          maxHeight: '1000px',
          opacity: '1',
        })
      ),
      state(
        'closed',
        style({
          maxHeight: '0px',
          opacity: '0',
          overflow: 'hidden',
          padding: 0,
        })
      ),
      transition('open => closed', animate('200ms ease')),
      transition('closed => open', animate('300ms ease')),
    ]),
  ],
})
export class AccordionComponent implements OnInit {
  @Input() slashCommand?: ISlashCommand;
  active = false;
  openClosedState = 'closed';

  constructor() {}

  ngOnInit(): void {}

  toggleOpenClosed() {
    this.active = !this.active;

    this.openClosedState =
      this.openClosedState === 'closed' ? 'open' : 'closed';
  }
}
