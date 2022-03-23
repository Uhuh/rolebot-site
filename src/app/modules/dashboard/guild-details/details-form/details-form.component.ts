import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss'],
})
export class DetailsFormComponent implements OnInit {
  @Input() categories: ICategory[] = [];

  constructor() {}

  ngOnInit(): void {}
}
