import { Component, OnInit } from '@angular/core';
import { IReactRole } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-category-store',
  templateUrl: './category-store.component.html',
  styleUrls: ['./category-store.component.scss'],
})
export class CategoryStoreComponent implements OnInit {
  reactRoles: IReactRole[] = [
    {
      hexCode: '#dd2e44',
      name: 'Red',
      unicode: '🟥',
    },
    {
      hexCode: '#2eb166',
      name: 'Green',
      unicode: '🟩',
    },
    {
      hexCode: '#3387c0',
      name: 'Blue',
      unicode: '🟦',
    },
    {
      hexCode: '#d6b014',
      name: 'Yellow',
      unicode: '🟨',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
