import { Component, OnInit } from '@angular/core';
import { IReactRole } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
