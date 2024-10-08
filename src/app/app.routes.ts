import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./modules/about/about.component'),
  },
  {
    path: 'commands',
    loadComponent: () => import('./modules/commands/commands.component'),
  },
  {
    path: 'faqs',
    loadComponent: () => import('./modules/faq/faq.component'),
  },
];
