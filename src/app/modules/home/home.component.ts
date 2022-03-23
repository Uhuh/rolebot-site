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
      id: 1,
      roleId: '1',
      hexCode: '#dd2e44',
      name: 'Red',
      emojiId: '🟥',
    },
    {
      id: 1,
      roleId: '1',
      hexCode: '#2eb166',
      name: 'Green',
      emojiId: '🟩',
    },
    {
      id: 1,
      roleId: '1',
      hexCode: '#3387c0',
      name: 'Blue',
      emojiId: '🟦',
    },
    {
      id: 1,
      roleId: '1',
      hexCode: '#d6b014',
      name: 'Yellow',
      emojiId: '🟨',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
