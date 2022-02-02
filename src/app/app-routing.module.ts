import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'store',
    loadChildren: () =>
      import('./modules/category-store/category-store.module').then(
        (mod) => mod.CategoryStoreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
