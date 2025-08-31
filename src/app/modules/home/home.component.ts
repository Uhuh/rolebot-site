import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { INVITE_URL } from '../../../main';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatRadioModule,
    MatCheckboxModule,
    MatIcon,
    NgClass,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  protected readonly INVITE_URL = INVITE_URL;

  readonly stats = [
    {
      title: 'Serving',
      icon: 'dns',
      message: '43,000+ servers',
    },
    {
      title: 'Categories created',
      icon: 'folder',
      message: '125,000+ categories',
    },
    {
      title: 'React roles created',
      icon: 'add_reaction',
      message: '450,000+ react roles',
    },
    {
      title: 'React messages create',
      icon: 'chat',
      message: '750,000+ messages',
    },
    {
      title: 'Days free',
      icon: 'all_inclusive',
      message: '',
    }
  ]

  protected readonly examples = [
    {
      title: 'Categories',
      description: 'Keep your react roles organized by creating a category! Categories help keep track of where react roles are and how you want users to obtain roles from them. Want only one role to be obtained from a category? Make them mutually-exclusive! ',
      image: 'category.png',
    },
    {
      title: 'React Roles',
      description: ` It's easy to create react roles. Make fancy react roles with your servers custom emojis, or use the default Discord ones! `,
      image: 'react-role.png',
    },
    {
      title: 'Custom messages',
      description: `Use your own custom message instead of RoleBot's default! This allows you to format your message how YOU like. Just copy the message link and tell RoleBot you want to use it with /react message`,
      image: 'message.png',
    },
    {
      title: 'Customize',
      description: `Want to customize RoleBot's embed? You can! Add images, change the embed color, add a description, you can style RoleBot's message how you like!.`,
      image: 'images-embed-v2.png',
    },
    {
      title: 'Use buttons!',
      description: `You don't even have to use reactions! RoleBot allows you to configure your server settings so that you can use buttons! When using buttons users will be told when they remove/add a role, unlike its reaction counterpart.`,
      image: 'buttons-example.png',
    }
  ];
}

export default HomeComponent;
