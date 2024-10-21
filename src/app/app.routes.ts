import {Routes} from '@angular/router';
import {INVITE_URL} from "../main";

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
  {
    path: 'privacy-policy',
    loadComponent: () => import('./modules/privacy-policy/privacy-policy.component')
  },
  {
    path: 'terms',
    loadComponent: () => import('./modules/terms/terms.component')
  },
  {
    path: 'invite',
    loadChildren: () => import('./modules/home/home.component'),
    resolve: {
      url: 'externalRedirect',
    },
    data: {
      externalUrl: INVITE_URL
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
