import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { CommandsComponent } from './modules/commands/commands.component';
import { FaqComponent } from './modules/faq/faq.component';
import { HomeComponent } from './modules/home/home.component';
import { PrivacyPolicyComponent } from './modules/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'commands',
    component: CommandsComponent,
  },
  {
    path: 'faqs',
    component: FaqComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
