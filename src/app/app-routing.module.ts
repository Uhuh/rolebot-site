import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'commands',
    loadChildren: () =>
      import('./modules/commands/commands.module').then(
        (mod) => mod.CommandsModule
      ),
  },
  {
    path: 'faqs',
    loadChildren: () =>
      import('./modules/faq/faq.module').then((mod) => mod.FaqModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./modules/privacy-policy/privacy-policy.module').then(
        (mod) => mod.PrivacyPolicyModule
      ),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./modules/terms/terms.module').then((mod) => mod.TermsModule),
  },
  {
    path: 'invite',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalRedirect',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      },
    },
  ],
})
export class AppRoutingModule {}
