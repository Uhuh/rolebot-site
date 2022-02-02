import { Component, Input, OnInit } from '@angular/core';
import { IReactRole } from '../../types/interfaces';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input() reactRoles: IReactRole[] = [];
  @Input() title?: string;
  @Input() description?: string;

  constructor() {}

  ngOnInit(): void {}
}
