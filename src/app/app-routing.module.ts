import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

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
    path: 'invite',
    redirectTo:
      'https://discord.com/oauth2/authorize?client_id=493668628361904139&scope=bot%20applications.commands&permissions=2416035904',
  },
  {
    path: 'presets',
    loadChildren: () =>
      import('./modules/category-store/category-store.module').then(
        (mod) => mod.CategoryStoreModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
  },
  {
    path: 'dashboard/:guildId',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/dashboard/guild-details/guild-details.module').then(
        (mod) => mod.GuildDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
