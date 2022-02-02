import { Component, Input, OnInit } from '@angular/core';
import { IReactRole } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-category-reaction',
  templateUrl: './category-reaction.component.html',
  styleUrls: ['./category-reaction.component.scss'],
})
export class CategoryReactionComponent implements OnInit {
  @Input() reactRole?: IReactRole;
  reactions = 1;
  clicked = false;

  constructor() {}

  ngOnInit(): void {}

  onReact() {
    this.clicked = !this.clicked;
    if (this.clicked) {
      this.reactions++;
    } else {
      this.reactions--;
    }
  }
}
