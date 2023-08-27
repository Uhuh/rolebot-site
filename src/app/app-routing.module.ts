import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'commands',
    loadComponent: () =>
      import('./pages/commands/commands.component').then(
        (c) => c.CommandsComponent
      ),
  },
  {
    path: 'faqs',
    loadComponent: () =>
      import('./pages/faq/faq.component').then((c) => c.FaqComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (c) => c.PrivacyPolicyComponent
      ),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms/terms.component').then((c) => c.TermsComponent),
  },
  {
    path: 'invite',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    resolve: {
      url: 'externalRedirect',
    },
    data: {
      externalUrl:
        'https://discord.com/oauth2/authorize?client_id=741682757486510081&scope=bot%20applications.commands&permissions=2416035904',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
