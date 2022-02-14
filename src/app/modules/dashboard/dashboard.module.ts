import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GuildCardComponent } from './guild-card/guild-card.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  declarations: [DashboardComponent, GuildCardComponent, UserHeaderComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class DashboardModule {}
