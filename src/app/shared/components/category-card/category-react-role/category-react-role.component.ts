import { Component, Input, OnInit } from '@angular/core';
import { IReactRole } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-category-react-role',
  templateUrl: './category-react-role.component.html',
  styleUrls: ['./category-react-role.component.scss'],
})
export class CategoryReactRoleComponent implements OnInit {
  @Input() reactRoles: IReactRole[] = [];

  constructor() {}

  ngOnInit(): void {}
}
